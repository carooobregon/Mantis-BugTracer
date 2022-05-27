import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import AuthPage from "../views/AuthPage.vue";
import HomePage from "../views/HomePage.vue";
import CreateNewChatPage from "../views/CreateNewChatPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/new-chat/:project_id",
    name: "New Chat",
    component: CreateNewChatPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
