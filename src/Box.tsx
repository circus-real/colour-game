import { varIdxSignal, totalSignal, correctSignal, changeColours, randomiseIdx } from "./utils";

interface Props {
    idx: number;
}

function Box(props: Props) {
    const [varIdx,] = varIdxSignal;
    const [, setTotal] = totalSignal;
    const [, setCorrect] = correctSignal;

    function isVariant(): boolean {
        const variant = varIdx() === props.idx;
        return variant;
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
