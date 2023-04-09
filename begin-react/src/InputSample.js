import React, { useState } from 'react'

function InputSample() {
    const [text, setText] = useState('');

    // 이벤트 객체 e 를 파라미터로 받아와서 사용할 수 있음.
    // e.target 은 이벤트가 발생한 DOM인 input DOM을 가리키게 된다.
    // 이 DOM의 value(e.target.value) 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있다.
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }
    
  return (
    <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: {text}</b>
        </div>
    </div>
  )
}

export default InputSample