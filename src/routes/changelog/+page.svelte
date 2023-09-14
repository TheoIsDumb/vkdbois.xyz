<script>
    import Log from './components/log.svelte';
    import { logs } from '$lib/details.js';
</script>

<div class="inner-container">
    <h1>changelog.</h1>

    <p><b>WARNING:</b> noob code hehe</p>

    {#each logs as log}
        <Log {log}/>
    {/each}
</div>