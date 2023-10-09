interface Props {
    variant?: boolean;
}

function Box(props: Props) {
    return (
        <div class="h-32 w-32 rounded-md" classList={{
            "bg-normal": !props.variant,
            "bg-variant": props.variant
        }} />
    );
}

export default Box;
