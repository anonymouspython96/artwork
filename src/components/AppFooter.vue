<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <a href="#" class="footer-logo"><span>E</span>lena</a>
                    <p>Artista digitale e illustratrice con base a Milano...</p>
                </div>

                <div>
                    <h3 class="footer-title">Link Utili</h3>
                    <ul class="footer-links">
                        <li v-for="(link, index) in links" :key="index">
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer-title">Servizi</h3>
                    <ul class="footer-links">
                        <li v-for="(service, index) in services" :key="index">
                            <a :href="service.url">{{ service.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; 2023 Elena Rossi. Tutti i diritti riservati.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                { text: "Home", url: "#home" },
                // Altri link...
            ],
            services: [
                { text: "Illustrazioni Digitali", url: "#" },
                // Altri servizi...
            ]
        }
    }
}
</script>

<style scoped>
/* Stili specifici del componente */
.app-footer {
    background: var(--primary);
    color: white;
    padding: 6rem 0 3rem;
}

/* Altri stili... */
</style>