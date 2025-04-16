import { For } from "solid-js";
import { changeColours, diffSignal, randomiseIdx } from "./utils";

function Difficulty() {
  const [diff, setDiff] = diffSignal;

  function handleBtnClick(idx: number) {
    setDiff(4 - idx);
    changeColours();
    randomiseIdx();
  }

  return (
    <header>
      <h3 class="text-2xl pb-2">Current difficulty: {4 - diff()}</h3>
      <section class="flex justify-center items-center gap-4">
        <For each={[0, 1, 2, 3]}>
          {(idx) => <button class="btn px-3 py-0.5 text-xl" onClick={() => handleBtnClick(idx)}>{idx}</button>}
        </For>
      </section>
    </header>
  );
};

export default Difficulty;
