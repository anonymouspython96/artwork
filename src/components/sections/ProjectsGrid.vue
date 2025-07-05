<template>
    <section id="projects" class="projects-section section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Progetti</h2>
                <p class="section-subtitle">Una selezione dei miei lavori più recenti</p>
            </div>

            <div class="projects-grid">
                <div v-for="project in projects" :key="project.id" class="project-item"
                    :style="{ backgroundColor: project.color }" @click="openProject(project)">
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
    </section>
</template>

<script>
export default {
    name: 'ProjectsGrid',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Urban Dreams',
                    category: 'Illustrazione Digitale',
                    year: 2023,
                    client: 'Galleria Contemporanea',
                    description: 'Serie di illustrazioni che esplorano il rapporto tra spazio urbano e immaginazione',
                    color: '#f8f0e3',
                    image: require('@/assets/images/project1.jpg')
                },
                {
                    id: 2,
                    title: 'Nature Reborn',
                    category: 'Animazione 3D',
                    year: 2022,
                    client: 'Museo di Scienze Naturali',
                    description: 'Animazione che mostra l\'evoluzione della flora in ambienti post-industriali',
                    color: '#e3f0f8',
                    image: require('@/assets/images/project2.jpg')
                },
                {
                    id: 3,
                    title: 'Digital Identity',
                    category: 'Brand Design',
                    year: 2023,
                    client: 'Tech Startup',
                    description: 'Sviluppo identità visiva per azienda tech focalizzata su sostenibilità',
                    color: '#f0e3f8',
                    image: require('@/assets/images/project3.jpg')
                },
                {
                    id: 4,
                    title: 'Human Connections',
                    category: 'Interactive Installation',
                    year: 2022,
                    client: 'Festival dell\'Arte Digitale',
                    description: 'Installazione interattiva che visualizza le connessioni umane in tempo reale',
                    color: '#f8f0e3',
                    image: require('@/assets/images/project4.jpg')
                }
            ]
        }
    },
    methods: {
        openProject(project) {
            this.$emit('open-project', project)
        }
    }
}
</script>

<style scoped lang="scss">
.projects-section {
    background: #f5f5f5;

    .section-header {
        text-align: center;
        margin-bottom: 6rem;

        .section-title {
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        .section-subtitle {
            font-size: 1.8rem;
            color: #666;
        }
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 3rem;

        @media (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .project-item {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        cursor: pointer;
        position: relative;
        height: 400px;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

            .project-info {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .project-image {
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .project-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.9);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;

        .project-title {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }

        .project-category {
            font-size: 1.4rem;
            color: #666;
        }
    }
}
</style>