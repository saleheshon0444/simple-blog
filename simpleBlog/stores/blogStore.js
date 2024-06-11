import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    idis: [],
    blogs: [
      {
        id: "01",
        title: "یک سایت خوب باید چه ویژگی هایی داشته باشه",
        content:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و در ستون و سطرآنچنان که لازم است",
        create_date: "20 اردیبهشت 1400",
        comments: 10,
        creator: "علی امینی",
        isFav: false,
      },
      {
        id: "02",
        title: "یک سایت خوب باید چه ویژگی هایی داشته باشه",
        content:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و در ستون و سطرآنچنان که لازم است",
        create_date: "20 اردیبهشت 1400",
        comments: 110,
        creator: "علی امینی",
        isFav: false,
      },
    ],
    Loading: false,
  }),
  getters: {
    favs() {
      return this.blogs.filter((b) => this.idis.includes(b.id));
    },
  },
  actions: {
    getBlog() {
      this.Loading = true;
      const favorites = localStorage.getItem("myfavorites");
      console.log(favorites);
      if (favorites) {
        this.idis = favorites.split(",");
      }
      this.Loading = false;
    },
    stringfyIdis() {
      let arr = this.idis;
      console.log(arr);
      localStorage.setItem("myfavorites", arr);
    },
    toggleFav(id) {
      const blog = this.blogs.find((b) => b.id === id);
      if (this.idis.includes(id) && blog.isFav) {
        this.idis = this.idis.filter(function (item) {
          return item !== id;
        });
        blog.isFav = false;
      } else {
        this.idis.push(id);
        blog.isFav = true;
      }
      this.stringfyIdis();
    },
  },
});
