<template>
  <div class="portfolio-app">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsGrid @open-project="openProject" />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <AppFooter />

    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeProject" />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsGrid from '@/components/sections/ProjectsGrid.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ProjectModal from '@/components/sections/ProjectModal.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    AboutSection,
    ProjectsGrid,
    ServicesSection,
    TestimonialsSection,
    ContactSection,
    ProjectModal
  },
  data() {
    return {
      selectedProject: null
    }
  },
  methods: {
    openProject(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeProject() {
      this.selectedProject = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss">
.portfolio-app {
  position: relative;
  min-height: 100vh;
}
</style>