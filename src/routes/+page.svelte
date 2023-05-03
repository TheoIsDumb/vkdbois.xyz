<script>
    import Logo from "./components/logo.svelte";
    import Arrow from "./components/arrow.svelte";
    import Sveltelogo from "./components/sveltelogo.svelte";
    import { fly } from 'svelte/transition';
</script>

<style>
    .inner-container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    .box {
        display: flex;
        flex-direction: row;
        width: 96%;
        max-width: 50vh;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .box p {
        color: #fff;
        font-size: 3rem;
        font-weight: 900;
        line-height: 2.5rem;
        border-left: 2px solid white;
        padding-left: 1rem;
        letter-spacing: -1px;
        margin: 0;
    }
</style>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <div class="box">
        <Logo/>
        <p>
            libre &<br>
            private<br>
            services<br>
            for<br>
            everyone.
        </p>
    </div>
    
    <a href="/home">
        <Arrow/>
    </a>

    <span>
        made with ❤️ by
        <a href="https://nsole.vkdbois.xyz" target="_blank" rel="noopener noreferrer">consoletree</a>
        and theooo
    </span>
    <Sveltelogo/>
</div>