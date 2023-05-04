<script>
    import { page } from '$app/stores';
    let title = $page.url.pathname;
</script>

<svelte:head>
    {#if title === "/"}
        <title>vkdbois.xyz</title>
    {:else}
        <title>{title} | vkdbois.xyz</title>
    {/if}
</svelte:head>