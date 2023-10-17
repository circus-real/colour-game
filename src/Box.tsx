import { varIdxSignal, totalSignal, correctSignal, changeColours, randomiseIdx } from "./utils";

type Props = {
    idx: number;
}

function Box(props: Props) {
    const [varIdx,] = varIdxSignal;
    const [, setTotal] = totalSignal;
    const [, setCorrect] = correctSignal;

    function isVariant(): boolean {
        return varIdx() === props.idx;
    }

    function handleGuess(): void {
        if (isVariant()) setCorrect((n) => n + 1)
        setTotal((n) => n + 1);
        randomiseIdx();
        changeColours();
    }

    return (
        <button onClick={handleGuess} class="h-32 w-32 rounded-md" classList={{
            "bg-normal": !isVariant(),
            "bg-variant": isVariant()
        }}>
            <p class="btn text-xl m-8">{props.idx}</p>
        </button>
    );
}

export default Box;
