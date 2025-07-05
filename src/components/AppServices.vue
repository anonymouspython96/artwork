<template>
    <section class="section services-section" id="services">
        <div class="container">
            <div class="section-header fade-in" :class="{ 'visible': isVisible }">
                <h2>I Miei Servizi</h2>
                <p class="section-subtitle">Soluzioni creative su misura per ogni progetto</p>
            </div>

            <div class="services-grid">
                <div v-for="(service, index) in services" :key="index" class="service-card fade-in"
                    :class="{ 'visible': isVisible }">
                    <div class="service-icon">
                        <i :class="service.icon"></i>
                    </div>
                    <h3 class="service-title">{{ service.title }}</h3>
                    <p class="service-description">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppServices',
    data() {
        return {
            isVisible: false,
            services: [
                {
                    icon: "fas fa-paint-brush",
                    title: "Illustrazioni Digitali",
                    description: "Creazione di illustrazioni personalizzate per libri, editoria, campagne pubblicitarie e progetti personali."
                },
                // Altri servizi...
            ]
        }
    },
    mounted() {
        this.checkScroll()
        window.addEventListener('scroll', this.checkScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkScroll)
    },
    methods: {
        checkScroll() {
            const element = this.$el
            const elementTop = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementTop < windowHeight - 100) {
                this.isVisible = true
            }
        }
    }
}
</script>

<style scoped>
/* Stili specifici del componente */
.services-section {
    background-color: var(--light);
}

/* Altri stili... */
</style>