<script>
    import { about } from '$lib/details.js';
</script>

<style>
    td {
        border-bottom: 1px solid #5c5c5c;
    }
    td#title {
        font-weight: 600;
        text-align: right;
        padding-right: 1rem;
    }
</style>

<div class="inner-container flex-justify-content">
    <h1>about.</h1>

    <table>
        {#each $about as detail}
            <tr>
                <td id="title">{detail[0]}</td>
                <td>{detail[1]}</td>
            </tr>
        {/each}
    </table>
</div>