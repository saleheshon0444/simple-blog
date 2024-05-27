import axios from "axios";
import { defineStore } from "pinia";
import { loadRouteLocation } from "vue-router";

export const useUsers = defineStore("Users", {
  state: () => ({
    phone: "",
    image: "",
    id: "",
    title: "",
    slug: "",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmV3LnBheWFuZWgub3JnXC92MVwvYXV0aFwvY29kZVwvY2hlY2siLCJpYXQiOjE3MTU2NzQzMTMsImV4cCI6MTcxNTY3NzkxMywibmJmIjoxNzE1Njc0MzEzLCJqdGkiOiJoVHFCdVc4QnQ5UVp4RGFjIiwic3ViIjo0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Wvhg_Vh7RAJrETfVQCdiT_oV331DhVO2DkVn9hCVJxA",
    api_key: "d44722794e262617d0ee63c45191b7fa9e7485857c30398e4a5c431c47c9d157",
    app_token: "",
    IMEI: "aslfas,fa;sdlfs",
  }),
  getters: {},
  actions: {
    async loginPhone(phone) {
      this.phone = phone;
      const body = { phone };
      const response = await axios.post(
        "https://new.payaneh.org/v1/auth/code/send",
        body
      );
      console.log(response.data);
    },
    async confirmPhone(code) {
      const phone = this.phone;
      const body = {
        phone,
        code,
      };
      const response = await axios.post(
        "https://new.payaneh.org/v1/auth/code/check",
        body,
        {
          headers: {
            IMEI: this.IMEI,
          },
        }
      );
      response.forEach((element) => {
        this.token = element.token;
      });
    },
    async register(
      fname,
      lname,
      phone,
      email,
      password,
      password_confirmation
    ) {
      const body = {
        fname,
        lname,
        phone,
        email,
        password,
        password_confirmation,
      };
      const response = await axios.post(
        "https://new.payaneh.org/v1/auth/register",
        body,
        {
          headers: {
            "Api-Token": this.app_token,
            IMEI: this.IMEI,
          },
        }
      );
      console.log(response.data);
    },
    async login(phone, password) {
      const body = { phone, password };
      const response = await axios.post(
        "https://new.payaneh.org/v1/auth/login",
        body,
        {
          headers: {
            "Api-Token": this.app_token,
            IMEI: this.IMEI,
          },
        }
      );
      const data = response.data.data;
      this.token = data.token;
      this.api_key = data.api_key;
    },
  },
});
