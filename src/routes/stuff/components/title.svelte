<script>
    import { fly } from 'svelte/transition';
</script>

<h1>
    <span in:fly={{ y: -50, delay: 500 }}>our</span>
    <span in:fly={{ y: -50, delay: 800 }}><del>noob</del></span>
    <span in:fly={{ y: -50, delay: 1000 }}>stuff.</span>
</h1>