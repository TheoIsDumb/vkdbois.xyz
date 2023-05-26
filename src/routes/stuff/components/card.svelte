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
        height: 12rem;
    }
    
    a:hover {
        transform: scale(0.95);
    }

    span.title {
        font-weight: bold;
        font-size: 1.3rem;
    }

    span.desc {
        font-size: 0.8rem;
        text-align: center;
    }
    
    img {
        height: 40%;
    }
</style>

<a
    class="inner-container flex-justify-content flex-align-items"
    href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title}/>
        <span class="title">{title}</span>
        <span class="desc">{desc}</span>
</a>