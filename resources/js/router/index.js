import { createRouter, createWebHistory  } from "vue-router";

import about from '../pages/AboutPage.vue';
import portfolio from '../pages/PortfolioPage.vue';
import resume from '../pages/ResumePage.vue';
import contact from '../pages/ContactPage.vue';

import notFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        name:about,
        component: about
    },
    {
        path: '/resume',
        name:resume,
        component: resume
    },
    {
        path: '/portfolio',
        name:portfolio,
        component: portfolio
    },
    {
        path: '/contact',
        name:contact,
        component: contact
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