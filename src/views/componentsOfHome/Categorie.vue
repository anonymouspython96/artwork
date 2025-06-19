<script>
export default {
    name: 'Categorie'
}

</script>

<template>
    <!--
[grafic design - illustrazioni - altri progetti 
-->
    <section>

        <h1>
            Dove il design incontra il tuo obiettivo
        </h1>

        <article>
            <section>
                <h2>Graphic Design</h2>
                <ul>
                    <li>Logotipi</li>
                    <li>Brand Identity</li>
                </ul>
            </section>

            <section>
                <h2>Illustrazioni</h2>
                <ul>
                    <li>Digitali</li>
                    <li>Tradizionali</li>
                </ul>
            </section>

            <section>
                <h2>Altri Progetti</h2>
                <ul>
                    <li>Altri…</li>
                </ul>
            </section>
        </article>

    </section>

</template>

<style scoped>
section {
    height: 1000px;
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 5rem;
    text-align: center;
    margin: 10rem 0;
    color: var(--rosa-antico);
}
article {
    display: flex;
    justify-content: space-evenly;
    
}
</style>