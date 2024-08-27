import { createRouter, createWebHistory } from "vue-router";

import App from "@/App.vue";
import Aula01 from "@/aula01/App.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: App },
        { path: "/aula01", component: Aula01 }
    ]
})