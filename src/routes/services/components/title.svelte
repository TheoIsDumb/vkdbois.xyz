<script>
    import { fly } from 'svelte/transition';
</script>

<h1>
    <span transition:fly={{ y: -50, delay: 300 }}>services</span>
    <span transition:fly={{ y: -50, delay: 600 }}>we</span>
    <span transition:fly={{ y: -50, delay: 900 }}>provide.</span>
</h1>