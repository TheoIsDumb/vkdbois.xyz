import { readable } from "svelte/store"

export const logs = readable([
    {
        date: '2023 May 26',
        items: [
            'Started using stores - readable tho',
            'replaced transition:fly with in:fly - turns out it was the reason everything was slow xD',
            'removed PicoCSS',
            'simplified CSS further',
            'removed Prettier and all that stuff - idky I added it',
            'changed main page design',
            's/services/stuff/',
            'Took down Libreddit and Piped'
        ]
    },
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
]);

export const about = readable([
    ["OS", "Debian GNU/Linux 11 (bullseye) x86_64"],
    ["CPU", "AMD EPYC 7282 (4) @ 2.794GHz"],
    ["RAM", "7956MiB"],
    ["Disk Space", "200G"],
    ["Framework", "SvelteKit"]
]);