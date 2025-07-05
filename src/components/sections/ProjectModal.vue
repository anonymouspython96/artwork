<template>
    <div v-if="project" class="project-modal">
        <div class="modal-overlay" @click="close"></div>

        <div class="modal-content">
            <button class="close-btn" @click="close">
                <i class="fas fa-times"></i>
            </button>

            <div class="modal-body">
                <div class="project-gallery">
                    <div class="main-image">
                        <img :src="project.image" :alt="project.title">
                    </div>
                </div>

                <div class="project-details">
                    <h2 class="project-title">{{ project.title }}</h2>

                    <div class="project-meta">
                        <div class="meta-item">
                            <span class="meta-label">Categoria</span>
                            <span class="meta-value">{{ project.category }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Anno</span>
                            <span class="meta-value">{{ project.year }}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Cliente</span>
                            <span class="meta-value">{{ project.client }}</span>
                        </div>
                    </div>

                    <div class="project-description">
                        <p>{{ project.description }}</p>
                    </div>

                    <div class="project-techniques">
                        <h3>Tecniche utilizzate</h3>
                        <ul>
                            <li>Illustrazione digitale</li>
                            <li>3D Modeling</li>
                            <li>Animazione</li>
                            <li>Compositing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectModal',
    props: {
        project: {
            type: Object,
            default: null
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="scss">
.project-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
    }

    .modal-content {
        position: relative;
        z-index: 2;
        background: white;
        width: 100%;
        max-width: 1200px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .close-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        background: $secondary;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        cursor: pointer;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;

        &:hover {
            transform: rotate(90deg);
        }
    }

    .modal-body {
        display: grid;
        grid-template-columns: 1fr;

        @media (min-width: 992px) {
            grid-template-columns: 6fr 4fr;
        }
    }

    .project-gallery {
        .main-image {
            height: 500px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .project-details {
        padding: 4rem;

        .project-title {
            font-size: 3.2rem;
            margin-bottom: 3rem;
        }

        .project-meta {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
            padding-bottom: 3rem;
            border-bottom: 1px solid #eee;

            .meta-item {
                .meta-label {
                    display: block;
                    font-size: 1.4rem;
                    color: #666;
                    margin-bottom: 0.5rem;
                }

                .meta-value {
                    font-size: 1.6rem;
                    font-weight: 600;
                }
            }
        }

        .project-description {
            font-size: 1.7rem;
            line-height: 1.8;
            margin-bottom: 4rem;
        }

        .project-techniques {
            h3 {
                font-size: 2rem;
                margin-bottom: 2rem;
            }

            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;

                li {
                    background: #f5f5f5;
                    padding: 0.8rem 1.6rem;
                    border-radius: 50px;
                    font-size: 1.4rem;
                }
            }
        }
    }
}
</style>