<script>
    import { fly } from 'svelte/transition';
</script>

<style>
    .sub {
        font-size: 0.7rem;
        font-weight: bold;
    }
</style>

<h1>
    <span transition:fly={{ y: -50, delay: 500 }}>services</span>
    <span transition:fly={{ y: -50, delay: 800 }}>we</span>
    <span transition:fly={{ y: -50, delay: 1000 }}>provide.</span>
    <div class="sub" transition:fly={{ y: -50, delay: 1200 }}>(and some lil pet projects of ours =D)</div>
</h1>
