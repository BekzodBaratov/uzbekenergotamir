import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/thermal_energy",
    name: "thermal_energy",
    component: () => import("../views/ThermalEnergy.vue"),
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/history",
    children: [
      {
        path: "/about/history",
        name: "history",
        component: () => import("../views/about/History.vue"),
      },
      {
        path: "/about/leaders",
        name: "leaders",
        component: () => import("../views/about/Leaders.vue"),
      },
      {
        path: "/about/finance",
        name: "finance",
        component: () => import("../views/about/Finance.vue"),
      },
      {
        path: "/about/news",
        name: "news",
        component: () => import("../views/about/News.vue"),
      },
      {
        path: "/about/affiliated_companies",
        name: "affiliated_companies",
        component: () => import("../views/about/Affiliated.vue"),
      },
    ],
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/educational",
    name: "educational",
    component: () => import("../views/Educational.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => {
    top: 0;
  },
  routes,
});
