import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home";
import Candidates from "../views/Candidates/Candidates";
import Team from "../views/Team/Team";
import Plan from "../views/Plan/Plan";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/candidatos",
    name: "Candidates",
    component: Candidates,
  },
  {
    path: "/equipo",
    name: "Team",
    component: Team,
  },
  {
    path: "/plan",
    name: "Plan",
    component: Plan,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
