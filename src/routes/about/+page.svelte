<script>
    import { fly } from 'svelte/transition';
    import Head from '../components/head.svelte';
</script>

<Head/>

<div class="inner-container" transition:fly={{ y: -50 }}>
    <h1>about.</h1>
</div>