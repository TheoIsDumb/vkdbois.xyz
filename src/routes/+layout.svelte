<script>
    import "../app.postcss"
    import { fade } from 'svelte/transition'
    import '$lib/styles/app.css'

    export let data
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
<div class="inner-container" in:fade={{ duration: 500 }} out:fade>
    <slot />
  </div>
{/key}