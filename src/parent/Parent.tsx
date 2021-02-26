import React, { useCallback, useState, useRef } from 'react';
import Child, { IRef } from '../child/Child';

const App: React.FC = () => {

  
  const [count, setCount] = useState(0);
  const childRef = useRef<IRef>(null);

  const addCount = useCallback(() => {
      setCount(oldCount => oldCount + 1);
  }, [])

  return (
    <div className="App">
      <h1>
        Parent
      </h1>
      <h2>
        {count}
      </h2>
      <button onClick={addCount}>Botão do Pai</button>
      <br />
      <button onClick={() => childRef.current?.addCountChild()}>
        Botão do Pai que ativa o filho
      </button>
      <Child title="Child" ref={childRef} />
    </div>
  );
}

export default App;
