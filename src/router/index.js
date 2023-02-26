import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Checkout from '../views/Checkout.vue'
import Privacy from '../views/Privacy.vue'

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
                path: '/product-detail/:id',
                name: 'productDetail',
                component: ProductDetail
            },
            {
                path: '/checkout',
                name: 'checkout',
                component: Checkout
            },
            {
                path: '/privacy',
                name: 'privacy',
                component: Privacy
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;