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
            <section class="card">
                <h2>Graphic Design</h2>
                <ul>
                    <li>Logotipi</li>
                    <li>Brand Identity</li>
                </ul>
            </section>

            <section class="card">
                <h2>Illustrazioni</h2>
                <ul>
                    <li>Digitali</li>
                    <li>Tradizionali</li>
                </ul>
            </section>

            <section class="card">
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
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 5rem;
    text-align: center;
    margin: 10rem 0;
    color: var(--rosa-antico);
}
h2 {
    font-size: 2.5rem;
}

article {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 10rem;
}
section .card {
    height: 30rem;
    width: 30rem;
}
.card {
    padding: 6rem;
    border: solid var(--verde-acqua-meno-luminoso) 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: var(--verde-acqua-luminoso);
    color: var(--ruggine);
}
ul {
    list-style: none;
}
li {
    margin: 5rem 0;
    text-align: center;
}
</style>