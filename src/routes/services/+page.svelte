<script>
    import Title from "./components/title.svelte";
    import Card from "./components/card.svelte";
    import { fly } from 'svelte/transition';
</script>

<style>
    .inner-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <Title/>

    <div class="services">
        <Card
            title="Libreddit"
            desc="An alternative front-end for Reddit."
            link="https://reddit.vkdbois.xyz"
            />
            
        <Card
            title="Piped"
            desc="An alternative privacy-friendly YouTube frontend which is efficient by design."
            link="https://piped.vkdbois.xyz"
            />
    </div>
</div>