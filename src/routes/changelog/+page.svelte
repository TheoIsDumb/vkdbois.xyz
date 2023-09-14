<script>
    import { logs } from '$lib/logs.js'
</script>

<div class="title flex items-center gap-2 mb-2">
    <a href="/">
        <svg class="h-6 w-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l-7 7l7 7"/></svg>
    </a>

    <h1 class="font-bold text-3xl">changelog.</h1>
</div>

<p class="mb-2"><b>WARNING:</b> noob code hehe</p>

{#each logs as log}
    <details class="p-4 mb-2 rounded border-2 border-gray-300" open>
        <summary class="font-bold">{log.date}</summary>
            <ul>
        {#each log.items as item}
                <li class="list-disc ml-4">{item}</li>
        {/each}
            </ul>
    </details>
{/each}