import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import LetterList from '../views/LetterList.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [{
        path: '/',
        component: DefaultLayout,
        children: [{
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/shop',
                name: 'shop',
                component: Shop
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: LetterList
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;