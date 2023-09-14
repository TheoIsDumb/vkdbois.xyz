<script>
    import Logo from "$lib/components/logo.svelte";
    import Svelteicon from "$lib/components/svelteicon.svelte";
</script>

<div class="flex flex-col items-center mt-4 gap-2">
    <Logo/>
    
    <span class="font-semibold text-center">
        where
        <a class="text-blue-500 underline"
        href="https://nsole.vkdbois.xyz" target="_blank" rel="noopener noreferrer">consoletree</a>
        and theooo reside.
    </span>

    <div class="flex items-center">
        made with ❤️ in <Svelteicon/>
    </div>

    <a class="bg-white text-blue-600 px-4 py-1 rounded"
    href="https://git.vkdbois.xyz/theo/homepage"
        target="_blank" rel="noopener noreferrer">
        source code
    </a>
</div>