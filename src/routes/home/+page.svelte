<script>
    import { fly } from 'svelte/transition'
    import { paths } from '$lib/store.js'
</script>

<style>
    a {
        text-decoration: none;
        color: white;
        background-color: #1c1b1b;
        padding: 1rem 0.5rem;
        border: 3px solid rgb(95, 95, 95);
        border-radius: 0.5rem;
        width: 10rem;
        margin-bottom: 0.6rem;
        transition: transform 0.5s;
    }

    a:hover {
        transform: scale(1.1);
    }
</style>

<div
    class="inner-container flex-justify-content flex-align-items">
    <h1 in:fly={{ y: -50, delay: 300 }}>home.</h1>

    {#each paths as path}
        <a
            class="flex flex-justify-content flex-align-items"
            href="{'/'+path}">{path}
        </a>
    {/each}
</div>