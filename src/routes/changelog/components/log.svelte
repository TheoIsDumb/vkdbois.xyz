<script>
    export let log;
</script>

<style>
    details {
        border: 3px solid #a5a5a5;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }
    summary {
        font-weight: bold;
    }
    ul, li {
        margin: 0;
    }
    li {
        list-style: disc;
    }
</style>

<details open>
    <summary>{log.date}</summary>
        <ul>
    {#each log.items as item}
            <li>{item}</li>
    {/each}
        </ul>
</details>