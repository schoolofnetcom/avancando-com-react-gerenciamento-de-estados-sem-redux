import React, { useContext } from 'react';
import AppCtx from './Context';

export default function Counter() {
    const [total, setTotal] = useContext(AppCtx);

    return (
        <div>
            <h4>{total}</h4>
            <button type="button" onClick={ () => setTotal(total +1) }> Counter + </button>
        </div>
    );
}