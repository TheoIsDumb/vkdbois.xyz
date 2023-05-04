<script>
    import Title from "./components/title.svelte";
    import Card from "./components/card.svelte";
    import Head from "../components/head.svelte";
    import { fly } from 'svelte/transition';

    const servicesData = [
        {
            title: "Libreddit",
            desc: "An alternative front-end for Reddit.",
            link: "https://reddit.vkdbois.xyz",
            img: "/icons/libreddit.png"
        },
        {
            title: "Piped",
            desc: "A privacy-friendly YouTube frontend.",
            link: "https://piped.vkdbois.xyz",
            img: "/icons/piped.svg"
        },
        {
            title: "Gitea",
            desc: "A lightweight code hosting solution written in Go.",
            link: "https://git.vkdbois.xyz",
            img: "/icons/gitea.svg"
        }
    ]
</script>

<style>
    .services {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>

<Head/>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <Title/>

    <div class="services">
            {#each servicesData as data}
                <Card {...data}/>
                {/each}
    </div>
</div>