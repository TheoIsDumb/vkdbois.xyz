<script>
    import Logo from "$lib/components/logo.svelte";
    import Arrow from "$lib/components/arrow.svelte";
    import Button from "$lib/components/button.svelte";
    import Svelteicon from "$lib/components/svelteicon.svelte";
</script>

<style>
    .inner-container {
        gap: 1rem;
    }
    span#sub {
        font-weight: 600;
        font-size: 1rem;
    }
    a {
        color: dodgerblue;
    }
</style>

<div class="inner-container flex-justify-content flex-align-items">
        <Logo/>
    
    <span id="sub">
        where
        <a href="https://nsole.vkdbois.xyz" target="_blank" rel="noopener noreferrer">consoletree</a>
        and theooo reside.
    </span>

    <a href="/home">
        <Arrow/>
    </a>

    <span style:display=flex class="flex-align-items" style:font-size=0.8rem>
        made with ❤️ in
        <Svelteicon/>
    </span>

    <Button/>
</div>