<template>
  <div id="app">
    <ResponsiveNav :menu-items="navItems" />

    <section id="home">
      <!-- Hero section content -->
    </section>

    <section id="about">
      <!-- Chi sono content -->
    </section>

    <section id="projects">
      <!-- Sezione progetti con i servizi -->
      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section id="contacts">
      <!-- Contatti content -->
    </section>

    <section id="feedback">
      <!-- Sezione feedback -->
      <div class="testimonials">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <div class="rating">
            ★{{ testimonial.rating }}
          </div>
          <p class="content">"{{ testimonial.content }}"</p>
          <p class="author">{{ testimonial.name }}, {{ testimonial.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResponsiveNav from './components/layout/ResponsiveNav.vue';
import { NAV_ITEMS, SERVICES, TESTIMONIALS } from './constants/strings.ts';

export default defineComponent({
  name: 'App',
  components: {
    ResponsiveNav
  },
  data() {
    return {
      navItems: NAV_ITEMS,
      services: SERVICES,
      testimonials: TESTIMONIALS
    };
  }
});
</script>

<style lang="scss">
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
}

.testimonials {
  display: grid;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.testimonial-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;

  .rating {
    color: #ffc107;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .author {
    font-style: italic;
    text-align: right;
    margin-top: 1rem;
    color: #666;
  }
}
</style>