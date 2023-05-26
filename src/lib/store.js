import { readable } from "svelte/store";

export const paths = readable(["stuff", "changelog", "about"]);

export let servicesData = readable([
    {
        title: "Gitea",
        desc: "Code hosting for vkdbois repos.",
        link: "https://git.vkdbois.xyz",
        img: "/icons/gitea.svg"
    },
    {
        title: "calorieCalc",
        desc: "For the gymbros.",
        link: "https://calorie.vkdbois.xyz",
        img: "/icons/caloriecalc.svg"
    },
    {
        title: "tz.svelte",
        desc: "sift through timezones.",
        link: "https://tz.vkdbois.xyz",
        img: "/icons/tz.webp"
    }
]);