interface ComponentExampleProps {
    //propriedades e tipos
    prop1: number;
    prop2: string
}

export const ComponentExample = (props:ComponentExampleProps) => {
    return(
        <div>prop1: {props.prop1} prop2: {props.prop2}</div>
    )
}