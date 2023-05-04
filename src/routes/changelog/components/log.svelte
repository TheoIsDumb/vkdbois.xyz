<script>
    export let log;
</script>

<style>
    details {
        border: 2px solid #a5a5a5;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul, li {
        margin: 0;
    }

    li {
        margin-left: 1rem;
        list-style: disc;
    }
</style>

<details open>
    <summary style="font-weight: bold">{log.date}</summary>
        <ul>
    {#each log.items as item}
            <li>{item}</li>
    {/each}
        </ul>
</details>