<script>
    import Title from "./components/title.svelte";
    import Card from "./components/card.svelte";
    import Head from "$lib/components/head.svelte";
    import { fly } from 'svelte/transition';
    import { servicesData } from '$lib/store.js';
</script>

<style>
    .services {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>

<Head/>

<div class="inner-container" in:fly={{ y: -50 }}>

<Title/>

    <div class="services">
            {#each $servicesData as data}
                <Card {...data}/>
                {/each}
    </div>
</div>