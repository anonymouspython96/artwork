<template>
    <section id="home" class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="line">Arte Digitale</span>
                    <span class="line">& Illustrazioni</span>
                </h1>
                <p class="hero-subtitle">Dove creatività e tecnologia si incontrano</p>
                <a href="#projects" class="hero-cta">Esplora i progetti</a>
            </div>
        </div>

        <div class="hero-image">
            <img src="@/assets/images/hero-bg.jpg" alt="Opera d'arte di Elena">
        </div>

        <div class="scroll-indicator">
            <div class="mouse"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>

<style scoped lang="scss">
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    .container {
        position: relative;
        z-index: 2;
    }

    .hero-content {
        max-width: 700px;
    }

    .hero-title {
        font-size: clamp(4rem, 8vw, 8rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 3rem;

        .line {
            display: block;
        }
    }

    .hero-subtitle {
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        margin-bottom: 4rem;
        max-width: 600px;
    }

    .hero-cta {
        display: inline-block;
        padding: 1.5rem 4rem;
        background: $secondary;
        color: white;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.6rem;
        border-radius: 50px;
        transition: transform 0.3s ease, background 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            background: darken($secondary, 10%);
        }
    }

    .hero-image {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .scroll-indicator {
        position: absolute;
        bottom: 4rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;

        .mouse {
            width: 30px;
            height: 50px;
            border: 2px solid $primary;
            border-radius: 20px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 6px;
                height: 6px;
                background: $primary;
                border-radius: 50%;
                animation: scroll 2s infinite;
            }
        }
    }
}

@keyframes scroll {
    0% {
        transform: translate(-50%, 0);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: translate(-50%, 15px);
        opacity: 0;
    }
}
</style>