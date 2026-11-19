import { createRouter, createWebHistory } from 'vue-router';

/**
 * The router instance of the application, managing the list of possible routes 
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('./views/ViewWelcome.vue'),
        },
    ],
});

export default router;
