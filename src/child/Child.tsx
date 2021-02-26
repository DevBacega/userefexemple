import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';

interface IProps {
    title: string;
}

export interface IRef {
    addCountChild: () => void;
}

const Child = forwardRef<IRef, IProps>(({title}: IProps, ref: Ref<IRef>) => {

    const [count, setCount] = useState(0);
    const addCountChild = useCallback(() => {
        setCount(oldCount => oldCount + 1);
    }, [])
    useImperativeHandle(ref, () => ({
        addCountChild,
    }))

    return (
        <div className="child">
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={addCountChild}>Botão do Filho</button>
        </div>
    )
});
export default Child;