<script>
    import { page } from '$app/stores';
    let title = $page.url.pathname;
    let desc = $page.data.desc;
</script>

<svelte:head>
    {#if title === "/"}
        <title>vkdbois.xyz</title>
    {:else}
        <title>{title.replaceAll('/', '')} | vkdbois.xyz</title>
    {/if}

    <meta name="description" content={desc}/>
</svelte:head>

<slot/>