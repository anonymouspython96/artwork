<template>
    <section class="section testimonials-section" id="testimonials">
        <div class="container">
            <div class="section-header fade-in" :class="{ 'visible': isVisible }">
                <h2>Feedback</h2>
                <p class="section-subtitle">Cosa dicono i miei clienti e collaboratori</p>
            </div>

            <div class="testimonials-grid">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card fade-in"
                    :class="{ 'visible': isVisible }">
                    <div class="rating">{{ testimonial.rating }}</div>
                    <p class="testimonial-content">{{ testimonial.content }}</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img :src="testimonial.author.avatar" :alt="testimonial.author.name">
                        </div>
                        <div class="author-info">
                            <h4>{{ testimonial.author.name }}</h4>
                            <p class="author-role">{{ testimonial.author.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppTestimonials',
    data() {
        return {
            isVisible: false,
            testimonials: [
                {
                    rating: "★★★★★",
                    content: "Elena ha trasformato la nostra identità visiva con un approccio fresco e innovativo...",
                    author: {
                        name: "Maria Bianchi",
                        role: "Direttore Artistico, Galleria Contemporanea",
                        // eslint-disable-next-line no-undef
                        avatar: require("@/assets/images/testimonial1.jpg")
                    }
                },
                // Altri testimonial...
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
.testimonials-section {
    background-color: #f5f5f5;
}

/* Altri stili... */
</style>