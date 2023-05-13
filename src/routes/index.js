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
      {
        path: "/about/partners",
        name: "partners",
        component: () => import("../views/about/Partners.vue"),
      },
    ],
  },
  {
    path: "/catalog",
    name: "catalog",
    redirect: "/catalog/local-products",
    children: [
      {
        path: "/catalog/local-products",
        name: "local-products",
        component: () => import("../views/catalog/LocalProduct.vue"),
      },
      {
        path: "/catalog/industrial-products",
        name: "industrial-products",
        component: () => import("../views/catalog/IndustrialProduct.vue"),
      },
    ],
  },
  {
    path: "/energies",
    name: "energies",
    redirect: "/energies/sources",
    children: [
      {
        path: "/energies/sources",
        name: "energies-sources",
        component: () => import("../views/energies/Sources.vue"),
      },
      {
        path: "/energies/waterHeater",
        name: "energies-heater",
        component: () => import("../views/energies/WaterHeaters.vue"),
      },
      {
        path: "/energies/solarPanels",
        name: "solar-panel",
        component: () => import("../views/energies/SolarPanels.vue"),
      },
      {
        path: "/energies/windEnergy",
        name: "wind-energy",
        component: () => import("../views/energies/WindEnergy.vue"),
      },
    ],
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
