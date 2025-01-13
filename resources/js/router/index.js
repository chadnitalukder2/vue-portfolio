import { createRouter, createWebHistory  } from "vue-router";

import about from '../pages/AboutPage.vue';
import notFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        name:about,
        component: about
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },

]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
})

export default router