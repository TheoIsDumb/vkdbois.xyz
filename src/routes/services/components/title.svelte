<script>
    import { fly } from 'svelte/transition';
</script>

<h1>
    <span transition:fly={{ y: -50, delay: 500 }}>services</span>
    <span transition:fly={{ y: -50, delay: 800 }}>we</span>
    <span transition:fly={{ y: -50, delay: 1000 }}>provide.</span>
</h1>