<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg>

<style>
    @keyframes anim {
        0% { filter: drop-shadow(0 0 0.1rem #a4d1d8); }
        50% { filter: drop-shadow(0 0 0.8rem #a4d1d8); }
        100% { filter: drop-shadow(0 0 0.1rem #a4d1d8); }
    }

    svg {
        width: 3rem;
        animation: anim 3s ease infinite;
        transition: transform 0.5s;
    }

    svg:hover {
        transform: rotate(90deg);
    }
</style>