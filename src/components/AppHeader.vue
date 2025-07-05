<template>
    <header class="app-header" :class="{ 'scrolled': isScrolled }" id="header">
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo"><span>E</span>lena</a>

                <nav class="nav" :class="{ 'active': menuOpen }" id="nav">
                    <button class="mobile-menu-close" @click="toggleMenu">
                        <i class="fas fa-times"></i>
                    </button>
                    <ul class="nav-list">
                        <li><a href="#home" class="nav-link" @click="closeMenu">Home</a></li>
                        <li><a href="#about" class="nav-link" @click="closeMenu">Chi sono</a></li>
                        <li><a href="#projects" class="nav-link" @click="closeMenu">Progetti</a></li>
                        <li><a href="#services" class="nav-link" @click="closeMenu">Servizi</a></li>
                        <li><a href="#testimonials" class="nav-link" @click="closeMenu">Feedback</a></li>
                        <li><a href="#contact" class="nav-link" @click="closeMenu">Contatti</a></li>
                    </ul>

                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-behance"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                    </div>
                </nav>

                <button class="mobile-menu-btn" @click="toggleMenu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuOpen: false,
            isScrolled: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
        closeMenu() {
            this.menuOpen = false
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 100
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
/* Stili specifici del componente */
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 2.5rem 0;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    background: transparent;
}

.app-header.scrolled {
    padding: 1.5rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

/* Altri stili... */
</style>