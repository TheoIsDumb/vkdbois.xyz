<script>
    import { fly } from 'svelte/transition';

    const details = [
        ["OS", "Debian GNU/Linux 11 (bullseye) x86_64"],
        ["CPU", "AMD EPYC 7282 (4) @ 2.794GHz"]
    ]
</script>

<style>
    .inner-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <h1>info.</h1>

    {#each details as detail}
        <details open>
            <summary>{detail[0]}</summary>
            <p>{detail[1]}</p>
        </details>
    {/each}
</div>