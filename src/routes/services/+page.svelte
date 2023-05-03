<script>
    import Title from "./components/title.svelte";
    import Card from "./components/card.svelte";
    import { fly } from 'svelte/transition';
</script>

<style>
    .services {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <Title/>

    <div class="services">
        <Card
            title="Libreddit"
            desc="An alternative front-end for Reddit."
            link="https://reddit.vkdbois.xyz"
            img="/icons/libreddit.png"
            />
            
        <Card
            title="Piped"
            desc="A privacy-friendly YouTube frontend."
            link="https://piped.vkdbois.xyz"
            img="/icons/piped.svg"
            />

        <Card
            title="Gitea"
            desc="A lightweight code hosting solution written in Go."
            link="https://git.vkdbois.xyz"
            img="/icons/gitea.svg"
            />
    </div>
</div>