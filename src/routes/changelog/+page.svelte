<script>
    import { logs } from '$lib/logs.js'
</script>

<h1 class="font-bold text-3xl mb-2">changelog.</h1>

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