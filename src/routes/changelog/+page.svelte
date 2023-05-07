<script>
    import { fly } from 'svelte/transition';
    import Head from '$lib/components/head.svelte';
    import Log from './components/log.svelte';

    const logs = [
        {
            date: '2023 May 07',
            items: [
                'TIL $lib aka src/lib/',
                'removed info',
                'updated about (previously info) layout'
            ]
        },
        {
            date: '2023 May 06',
            items: [
                'Added calorieCalc'
            ]
        },
        {
            date: '2023 May 04',
            items: [
                'Code maintenance - #each',
                'svelte:head',
                'Added Changelog'
            ]
        },
        {
            date: '2023 May 03',
            items: [
                'Services Grid',
                'Arrow glow animation',
                '100vh => 100dvh (TIL dvh, all my life problems are solved /s)',
                'Fixed inner-container code cruft'
            ]
        }
    ]
</script>

<Head />

<div class="inner-container" transition:fly={{ y: -50 }}>
    <h1>changelog.</h1>

    <p><b>WARNING:</b> noob code hehe</p>

    {#each logs as log}
        <Log {log}/>
    {/each}
</div>