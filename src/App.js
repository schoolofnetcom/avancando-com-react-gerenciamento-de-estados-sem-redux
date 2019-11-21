import React, { useState } from 'react';
import AppCtx from './Context';
import Counter from './Counter';

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <AppCtx.Provider value={[total, setTotal]}>
        App: {total}
        <Counter />
        <button type="button" onClick={() => setTotal(total + 1)}>Counter App +</button>
      </AppCtx.Provider> 
    </div>
  );
}
