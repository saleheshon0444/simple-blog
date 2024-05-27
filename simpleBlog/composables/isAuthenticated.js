import axios from "axios";
export default async function isAuthenticated() {
  //   async function postData(url = "", data = {}) {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     console.log(response.json());
  //     return response.json();
  //   }
  //   postData("https://new.payaneh.org/v1/auth/code/send", {
  //     phone: "09910774216",
  //   }).then((data) => {
  //     console.log(data);
  //   });
  const headers = {
    "Content-Type": "application/json",
    accept: "application/json",
  };
  const body = {
    phone: "09910774216",
  };
  const response = await axios.post(
    "https://new.payaneh.org/v1/auth/code/send",
    headers,
    body
  );
  console.log(response);
}
