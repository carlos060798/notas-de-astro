import { useState } from 'react';
function Buttonsuma() {
    const [count, setCount] = useState(0);
    return ( <>
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Sumar</button>
    </>
    </> );
}

export default Buttonsuma;