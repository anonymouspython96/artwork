<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './componentsOfApp/Navbar.vue';
import Home from './views/Home.vue'; // Importa il componente Home

export default {

    components: {
        Navbar,
        Home
    },

    setup() {
        const route = useRoute();
        const isHome = computed(() => route.path === '/'); // Mostra solo nella home

        return { isHome };
    }
    
};
</script>

<template>
    <Navbar />
    <div v-if="isHome">
        <Home />
    </div>
    <div class="content">
        <router-view />
    </div>
</template>

<style scoped>

</style>
