import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import About from "@/views/About.vue";
import Perfumes from "@/views/Perfumes.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/perfumes",
    name: "Perfumes",
    component: Perfumes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
