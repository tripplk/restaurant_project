import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'
import Restaurant from '@/components/Restaurant.vue'
import Order from '@/components/Order.vue'
import Menu from '@/components/Menu.vue'
//route array of objects : path, component
const routes = [
    {
      path: '/',
      component: HomePage,
    },

{ 
  path: '/About',
 component:About,
 },
  { 
  path: '/contact',
  component: Contact,
  },
  { 
  path: '/Booking',
 component:Booking ,
  },
  { 
  path: '/Feedback',
 component: Feedback,
 },
 { 
 path: '/Menu',
 component: Menu,
 },
 { 
  path: '/Restaurant',
 component:Restaurant,
 },
 {
  path: '/Order',
  component: Order,
  },

  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
  })
export default router
