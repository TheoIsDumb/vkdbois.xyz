<script>
    import { fly } from 'svelte/transition';
</script>

<style>
    a {
        color: white;
        background-color: #1c1b1b;
        padding: 1rem 0.5rem;
        border: 3px solid rgb(95, 95, 95);
        border-radius: 0.5rem;
        width: 10rem;
        margin-bottom: 0.5rem;
    }
</style>

<div class="inner-container flex-justify-content flex-align-items" transition:fly={{ y: -50 }}>
    <h1 transition:fly={{ y: -50, delay: 300 }}>home.</h1>

    <a class="center" href="/services">services</a>
    <a class="center" href="/info">info</a>
    <a class="center" href="/about">about</a>
</div>