<script>
    export let title = "";
    export let desc = "";
    export let link = "";
</script>

<style>
    article {
        background: #1c1b1b;
        border-radius: 0.5rem;
        border: 3px solid rgb(95, 95, 95);
        padding: 1rem;
        margin-bottom: 1rem;
    }
    
    p {
        color: white;
    }
    
    a {
        text-decoration: none;
    }
</style>

<a href={link}>
    <article>
        <h1>{title}</h1>
        <p>{desc}</p>
    </article>
</a>