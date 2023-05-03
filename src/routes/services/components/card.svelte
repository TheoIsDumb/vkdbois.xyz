<script>
    export let title = "";
    export let desc = "";
    export let link = "";
    export let img = "";
</script>

<style>
    a {
        flex-direction: column;
        text-decoration: none;
        color: white;
        background: #1c1b1b;
        border-radius: 0.5rem;
        border: 3px solid rgb(95, 95, 95);
        padding: 1rem;
        transition: transform 0.5s;
        height: 15rem;
    }
    
    a:hover {
        transform: scale(1.05);
    }

    span {
        font-weight: bold;
        font-size: 1.5rem;
    }
    
    img {
        height: 50%;
    }
</style>

<a class="center" href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title}/>
        <span>{title}</span>
        {desc}
</a>