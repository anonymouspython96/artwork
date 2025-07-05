<template>
    <section class="section about-section" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-image fade-in" :class="{ 'visible': isVisible }">
                    <img src="@/assets/images/about.jpg" alt="Elena Rossi">
                </div>

                <div class="about-text fade-in" :class="{ 'visible': isVisible }">
                    <h2>Ciao, sono Elena</h2>
                    <p>Artista digitale e illustratrice con base a Milano. Con oltre 10 anni di esperienza nel settore
                        creativo...</p>

                    <div class="skills">
                        <span v-for="(skill, index) in skills" :key="index" class="skill">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppAbout',
    data() {
        return {
            isVisible: false,
            skills: [
                "Illustrazione Digitale",
                "Graphic Design",
                "3D Modeling",
                "Animazione",
                "Brand Identity",
                "Art Direction"
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
.about-section {
    background-color: var(--light);
}

/* Altri stili... */
</style>