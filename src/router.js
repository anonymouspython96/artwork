import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Home con Navbar + Hero
import ChiSono from './views/ChiSono.vue';
import Servizi from './views/Servizi.vue';
import Contatti from './views/Contatti.vue';
import Commenti from './views/Commenti.vue';

const routes = [
  { path: '/', component: Home }, // Home di default
  { path: '/chi-sono', component: ChiSono },
  { path: '/servizi', component: Servizi },
  { path: '/contatti', component: Contatti },
  { path: '/commenti', component: Commenti },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
