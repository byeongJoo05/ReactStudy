import React, { useState } from 'react'
// 함수형 컴포넌트도 react Hooks 때문에 동적 상태 관리를 할 수 있게 되었다.

const Counter = () => {

    const [number, setNumber] = useState(0); //첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter