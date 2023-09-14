<script>
    import { services } from '$lib/store'
    import Logo from "$lib/components/logo.svelte";
    import Svelteicon from "$lib/components/svelteicon.svelte";
</script>

<div class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <Logo/>
        
        <span class="font-semibold">
            where
            <a class="text-blue-500 underline"
            href="https://nsole.vkdbois.xyz" target="_blank" rel="noopener noreferrer">consoletree</a>
            and
            <a class="text-blue-500 underline"
            href="https://github.com/theoisdumb" target="_blank" rel="noopener noreferrer">theo</a>
            reside.
        </span>
    </div>

    <h1 class="font-bold text-3xl">our stuff.</h1>

    <div class="flex flex-col gap-2">
        {#each services as service}
            <a href={service.link}
            class="bg-zinc-950 border-4 border-stone-700 w-full flex p-2 items-center gap-4 rounded-md"
            target="_blank" rel="noopener noreferrer">
                <img class="w-1/5" src={service.img} alt={service.title}/>

                <div class="flex flex-col">
                    <h1 class="font-semibold text-2xl">{service.title}</h1>
                    <p>{service.desc}</p>
                </div>
            </a>
        {/each}
    </div>

    <div class="flex flex-col items-center gap-2">
        <div class="flex items-center">
            made with ❤️ in <Svelteicon/>
        </div>

        <div class="btns flex gap-2">
            <a class="bg-white text-blue-600 px-4 py-1 rounded"
            href="https://github.com/theoisdumb/vkdbois.xyz"
                target="_blank" rel="noopener noreferrer">
                source code
            </a>

            <a class="bg-white text-blue-600 px-4 py-1 rounded"
            href="/changelog">
                changelog
            </a>
        </div>
    </div>
</div>