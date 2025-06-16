<script>import '@/assets/base.css';</script>
<template>
    <nav>
        <ol>
            <li><router-link to="/" :class="{ active: $route.path === '/' }">Home</router-link></li>
            <li><router-link to="/chi-sono" :class="{ active: $route.path === '/chi-sono' }">Chi Sono</router-link></li>
            <li><router-link to="/servizi" :class="{ active: $route.path === '/servizi' }">Servizi</router-link></li>
            <li><router-link to="/contatti" :class="{ active: $route.path === '/contatti' }">Contatti</router-link></li>
            <li class="float-right"><router-link to="/commenti"
                    :class="{ active: $route.path === '/commenti' }">Commenti</router-link></li>
        </ol>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.2rem 5rem;
    display: flex;
    justify-content: center;
    z-index: 1000;
    /* posizione fissata in alto == behaviour che può cambiare a seconda di come va la nav */
    background-color: var(--fanta-black);
    font-size: 1.2rem;
}

nav ol {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0;
    width: 100%;
}

nav li.float-right {
    margin-left: auto;
    /* Sposta "Commenti" a destra */
}

nav a {
    color: var(--fanta-white);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: var(--rosa-antico);
    transition: width 0.8s ease-in-out;
}

nav a:hover::after {
    width: 100%;
    /* L'underline cresce gradualmente */
}

nav a:hover,
nav a.router-link-active {
    color: var(--rosa-antico);
}
</style>
