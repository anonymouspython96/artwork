<template>
    <section class="section projects-section" id="projects">
        <div class="container">
            <div class="section-header fade-in" :class="{ 'visible': isVisible }">
                <h2>Progetti Recenti</h2>
                <p class="section-subtitle">Una selezione dei miei lavori più significativi</p>
            </div>

            <div class="projects-grid">
                <div v-for="project in projects" :key="project.id" class="project-item fade-in"
                    :class="{ 'visible': isVisible }" @click="openModal(project.id)">
                    <div class="project-image">
                        <img :src="project.image" :alt="project.title">
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">{{ project.title }}</h3>
                        <p class="project-category">{{ project.category }}</p>
                    </div>
                </div>
            </div>
        </div>

        <ProjectModal v-if="modalOpen" :project="selectedProject" @close="closeModal" />
    </section>
</template>

<script>
import ProjectModal from '@/components/ProjectModal.vue'

export default {
    name: 'AppProjects',
    components: {
        ProjectModal
    },
    data() {
        return {
            isVisible: false,
            modalOpen: false,
            selectedProject: null,
            projects: [
                {
                    id: 1,
                    title: "Urban Dreams",
                    category: "Illustrazione Digitale",
                    // eslint-disable-next-line no-undef
                    image: require("@/assets/images/project1.jpg"),
                    description: "Serie di illustrazioni digitali che esplorano il rapporto tra spazio urbano e immaginazione...",
                    year: "2023",
                    client: "Galleria Contemporanea",
                    techniques: ["Illustrazione digitale", "Compositing", "Photo manipulation", "Digital painting"]
                },
                // Altri progetti...
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
        openModal(projectId) {
            this.selectedProject = this.projects.find(p => p.id === projectId)
            this.modalOpen = true
            document.body.style.overflow = 'hidden'
        },
        closeModal() {
            this.modalOpen = false
            document.body.style.overflow = 'auto'
        }
    }
}
</script>

<style scoped>
/* Stili specifici del componente */
.projects-section {
    background: #f5f5f5;
}

/* Altri stili... */
</style>