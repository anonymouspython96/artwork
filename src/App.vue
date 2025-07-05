<template>
  <div id="app">
    <AppHeader />
    <AppHero />
    <AppAbout />
    <AppProjects />
    <AppServices />
    <AppTestimonials />
    <AppContact />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppHero from '@/components/AppHero.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppProjects from '@/components/AppProjects.vue';
import AppServices from '@/components/AppServices.vue';
import AppTestimonials from '@/components/AppTestimonials.vue';
import AppContact from '@/components/AppContact.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    AppAbout,
    AppProjects,
    AppServices,
    AppTestimonials,
    AppContact,
    AppFooter
  }
};
</script>

<style>
/* Stili globali */
@import '@/assets/styles/main.css';
</style>