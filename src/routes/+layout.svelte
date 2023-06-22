<script>
    import { fly } from 'svelte/transition';
    import '$lib/styles/app.css';

    export let data;
</script>

<svelte:head>
    {#key data.url}
        {#if data.url === "/"}
            <title>vkdbois.xyz</title>
        {:else}
            <title>{data.url.replaceAll('/', '')} | vkdbois.xyz</title>
        {/if}
    {/key}
</svelte:head>

{#key data}
<div in:fly={{ x: 50, duration: 500 }} out:fly={{ x: -50 }}>
    <slot />
  </div>
{/key}