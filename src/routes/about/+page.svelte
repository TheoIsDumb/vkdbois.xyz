<script>
    import { fly } from 'svelte/transition';
    import Head from '$lib/components/head.svelte';

    const details = [
        ["OS", "Debian GNU/Linux 11 (bullseye) x86_64"],
        ["CPU", "AMD EPYC 7282 (4) @ 2.794GHz"],
        ["RAM", "7956MiB"],
        ["Disk Space", "200G"],
        ["Framework", "SvelteKit"],
        ["CSS", "PicoCSS"]
    ]
</script>

<style>
    td {
        border-bottom: 1px solid #5c5c5c;
    }
</style>

<Head/>

<div class="inner-container flex-justify-content" transition:fly={{ y: -50 }}>
    <h1>about.</h1>

    <!-- {#each details as detail}
        <details open>
            <summary>{detail[0]}</summary>
            <p>{detail[1]}</p>
        </details>
    {/each} -->

    <table>
        {#each details as detail}
            <tr>
                <td style="font-weight: 600; text-align: right;">{detail[0]}</td>
                <td>{detail[1]}</td>
            </tr>
        {/each}
    </table>
</div>