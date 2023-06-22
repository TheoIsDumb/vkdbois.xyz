<script>
    import Title from "./components/title.svelte";
    import Card from "./components/card.svelte";
    import { servicesData } from '$lib/store.js';
</script>

<style>
    .services {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }
</style>


<div class="inner-container">

<Title/>

    <div class="services">
            {#each $servicesData as data}
                <Card {...data}/>
                {/each}
    </div>
</div>