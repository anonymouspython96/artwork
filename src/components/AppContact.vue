<template>
    <section class="section contact-section" id="contact">
        <div class="container">
            <div class="section-header fade-in" :class="{ 'visible': isVisible }">
                <h2>Contattami</h2>
                <p class="section-subtitle">Pronto per iniziare un nuovo progetto? Scrivimi!</p>
            </div>

            <div class="contact-container">
                <div class="contact-info fade-in" :class="{ 'visible': isVisible }">
                    <h2>Collaboriamo insieme</h2>
                    <p>Sono sempre aperta a nuove collaborazioni e progetti stimolanti...</p>

                    <div class="contact-details">
                        <div v-for="(item, index) in contactInfo" :key="index" class="contact-item">
                            <div class="contact-icon">
                                <i :class="item.icon"></i>
                            </div>
                            <div>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.value }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-social">
                        <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" class="social-link">
                            <i :class="`${link.icon} fa-2x`"></i>
                        </a>
                    </div>
                </div>

                <div class="contact-form fade-in" :class="{ 'visible': isVisible }">
                    <form id="contactForm" @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" id="name" v-model="form.name" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" v-model="form.email" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="subject" class="form-label">Oggetto</label>
                            <input type="text" id="subject" v-model="form.subject" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">Messaggio</label>
                            <textarea id="message" v-model="form.message" class="form-control" required></textarea>
                        </div>

                        <button type="submit" class="btn">Invia Messaggio</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppContact',
    data() {
        return {
            isVisible: false,
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            contactInfo: [
                {
                    icon: "fas fa-envelope",
                    title: "Email",
                    value: "info@elenarossi.art"
                },
                // Altri contatti...
            ],
            socialLinks: [
                { icon: "fab fa-instagram", url: "#" },
                // Altri social...
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
        },
        submitForm() {
            // Invia il form (puoi usare axios o fetch)
            alert('Grazie per il tuo messaggio! Ti risponderò il prima possibile.')
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    }
}
</script>

<style scoped>
/* Stili specifici del componente */
.contact-section {
    background-color: var(--light);
}

/* Altri stili... */
</style>