import Box from "./Box";

interface Props {
    varIdx: number;
}

function Boxes(props: Props) {
    return (
        <section class="grid grid-cols-2 gap-8">
            <Box variant={props.varIdx === 0} />
            <Box variant={props.varIdx === 1} />
            <Box variant={props.varIdx === 2} />
            <Box variant={props.varIdx === 3} />
        </section>
    );
}

export default Boxes;
