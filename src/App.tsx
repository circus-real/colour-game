import { createSignal, onMount } from "solid-js";
import Boxes from "./Boxes"

function App() {
    const [varIdx, setVarIdx] = createSignal<number>(0);

    function chgColours(): void {
        const red = () => Math.floor(Math.random() * 256);
        const green = () => Math.floor(Math.random() * 256);
        const blue = () => Math.floor(Math.random() * 256);
        const colour = () => `rgb(${red()}, ${green()}, ${blue()})`;
        document.documentElement.style.setProperty("--colour-variant", colour());
        document.documentElement.style.setProperty("--colour-normal", colour());
    }

    onMount(chgColours);

    return (
        <main class="p-12 flex flex-col justify-center items-center gap-16">
            <h1 class="text-6xl font-bold">Colour Game</h1>
            <Boxes varIdx={varIdx()} />
            <button class="btn" onClick={() => setVarIdx((n) => (n + 1) % 4)}>index</button>
            <button class="btn" onClick={chgColours}>colour</button>
        </main>
    )
}

export default App
