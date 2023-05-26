<script>
    import { fly } from 'svelte/transition';
    import Head from '$lib/components/head.svelte';
    import Log from './components/log.svelte';
    import { logs } from '$lib/details.js';
</script>

<Head />

<div class="inner-container" in:fly={{ y: -50 }}>
    <h1>changelog.</h1>

    <p><b>WARNING:</b> noob code hehe</p>

    {#each $logs as log}
        <Log {log}/>
    {/each}
</div>