<template>
    <header class="app-header" :class="{ 'scrolled': scrolled }">
        <div class="container">
            <router-link to="/" class="logo">
                <span>E</span>lena
            </router-link>

            <nav class="nav">
                <ul>
                    <li v-for="item in navItems" :key="item.id">
                        <a :href="item.link" class="nav-link">{{ item.label }}</a>
                    </li>
                </ul>
            </nav>

            <div class="social-links">
                <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://behance.net" target="_blank" aria-label="Behance">
                    <i class="fab fa-behance"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            scrolled: false,
            navItems: [
                { id: 'home', label: 'Home', link: '#home' },
                { id: 'about', label: 'Chi sono', link: '#about' },
                { id: 'projects', label: 'Progetti', link: '#projects' },
                { id: 'services', label: 'Servizi', link: '#services' },
                { id: 'contact', label: 'Contatti', link: '#contact' }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 100
        }
    }
}
</script>

<style scoped lang="scss">
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 2.5rem 0;
    transition: $transition;
    background: transparent;

    &.scrolled {
        padding: 1.5rem 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: -1px;
        text-decoration: none;
        color: $primary;

        span {
            color: $secondary;
        }
    }

    .nav {
        ul {
            display: flex;
            gap: 4rem;
            list-style: none;
        }

        .nav-link {
            text-decoration: none;
            color: $dark;
            font-size: 1.6rem;
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: $secondary;
                transition: width 0.4s ease;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }

    .social-links {
        display: flex;
        gap: 1.5rem;

        a {
            color: $primary;
            font-size: 1.8rem;
            transition: color 0.3s ease;

            &:hover {
                color: $secondary;
            }
        }
    }
}
</style>