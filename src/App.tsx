import { For, Show } from "solid-js";
import { correctSignal, totalSignal } from "./utils";
import Box from "./Box";

function App() {
    const [correct,] = correctSignal;
    const [total,] = totalSignal;

    return (
        <main class="p-12 flex flex-col justify-center items-center gap-8">
            <h1 class="text-6xl font-bold">Colour Game</h1>
            <section class="grid grid-cols-2 gap-8">
                <For each={[0, 1, 2, 3]}>
                    {(idx) => <Box idx={idx} />}
                </For>
            </section>
            <Show when={total() > 0}>
                <h3 class="text-4xl font-semibold">Score</h3>
                <p class="text-2xl">{correct()} correct out of {total()}{" "}- {Math.round(100 * correct() / total())}%</p>
            </Show>
        </main>
    )
}

export default App
