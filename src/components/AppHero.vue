<template>
    <section class="hero-section" id="home">
        <div class="container">
            <div class="hero-content">
                <h1 class="fade-in" :class="{ 'visible': isVisible }">Arte Digitale <br>& Illustrazioni</h1>
                <p class="hero-subtitle fade-in" :class="{ 'visible': isVisible }">Dove creatività e tecnologia si
                    incontrano per creare esperienze visive uniche</p>
                <a href="#projects" class="btn fade-in" :class="{ 'visible': isVisible }">Esplora i progetti</a>
            </div>
        </div>

        <div class="hero-image fade-in" :class="{ 'visible': isVisible }">
            <img src="@/assets/images/hero-image.jpg" alt="Opera d'arte di Elena">
        </div>

        <div class="scroll-indicator">
            <div class="mouse"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppHero',
    data() {
        return {
            isVisible: false
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
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 8rem;
}

/* Altri stili... */
</style>