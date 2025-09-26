import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import InfiniteDelight from '@/pages/InfiniteDelight.vue'
import KahiGaol from '@/pages/KahiGaol.vue'
import Horeca from '@/pages/Horeca.vue'
import Distributor from '@/pages/Distributor.vue'
import AboutUs from '@/pages/AboutUs.vue'
import ContactUs from '@/pages/ContactUs.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home - Your Site Name',
            description: 'Welcome to our homepage'
        }
    },
    {
        path: '/infinite-delight',
        name: 'InfiniteDelight',
        component: InfiniteDelight,
        meta: {
            title: 'Infinite Delight - Your Site Name',
            description: 'Discover our Infinite Delight products'
        }
    },
    {
        path: '/kahi-gaol',
        name: 'KahiGaol',
        component: KahiGaol,
        meta: {
            title: 'Kahi Gaol - Your Site Name',
            description: 'Learn about our Kahi Gaol offerings'
        }
    },
    {
        path: '/horeca',
        name: 'Horeca',
        component: Horeca,
        meta: {
            title: 'HORECA Solutions - Your Site Name',
            description: 'Professional HORECA solutions'
        }
    },
    {
        path: '/distributor',
        name: 'Distributor',
        component: Distributor,
        meta: {
            title: 'Become a Distributor - Your Site Name',
            description: 'Join our distribution network'
        }
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
            title: 'About Us - Your Site Name',
            description: 'Learn more about our company'
        }
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: {
            title: 'Contact Us - Your Site Name',
            description: 'Get in touch with us'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 - Page Not Found',
            description: 'The page you are looking for does not exist'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Scroll to top on route change, or restore previous position
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Navigation guards for meta tags and SEO
router.beforeEach((to, from, next) => {
    // Update page title
    if (to.meta.title) {
        document.title = to.meta.title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (to.meta.description && metaDescription) {
        metaDescription.setAttribute('content', to.meta.description)
    }

    next()
})

export default router