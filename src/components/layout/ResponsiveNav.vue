<script setup lang="ts">
// Import rimosso perché non necessario nel componente
// Le navItems vengono passate tramite props da App.vue
defineProps<{
    menuItems: Array<{ id: string; label: string }>
}>();
</script>

<template>
    <nav class="responsive-nav">
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                <a :href="`#${item.id}`">{{ item.label }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
// Aggiungi variabili SCSS locali se non hai un file globale
$breakpoint-tablet: 768px;

.responsive-nav {
    background-color: #f8f9fa;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (min-width: $breakpoint-tablet) {
            flex-direction: row;
            gap: 2rem;
            justify-content: center;
        }

        li {
            a {
                text-decoration: none;
                color: #5e35b1;
                font-weight: 500;
                transition: color 0.3s ease;
                padding: 0.5rem 1rem;
                border-radius: 4px;

                &:hover {
                    color: #ff4081;
                    background-color: rgba(94, 53, 177, 0.1);
                }
            }
        }
    }
}
</style>