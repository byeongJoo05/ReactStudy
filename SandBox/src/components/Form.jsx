import React, {useState } from 'react'
import { createForm } from '../api/FormApi';

const Form = () => {

    // useState의 object를 이용해 변경을 체킹한다. spread 문법과 연관되어 있다.
    const [inputs, setInputs] = useState({
        id: '',
        pw: '',
        nickname: '',
        name: '',
        jmfront: '',
        jmback: ''
    });

    // getter는 inputs 배열을 통해 한 번에 controll 한다.
    const {id, pw, nickname, name, jmfront, jmback} = inputs;

    const postEvent = (e) => {
        const a = createForm('create', inputs)
        a.then(response => {
            if (response.data.status === 200) {
                alert("보내기 성공함")
            }
        })
    }

    // setter 주입과 연관되어 있는 change event
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

  return (
    <div>
        <ul>
            <li>
                 ID: <input name="id" type='text' value={id} onChange={onChange}/>
            </li>
            <li>
                PW: <input name="pw" type='text' value={pw} onChange={onChange}/>
            </li>
            <li>
                닉네임: <input name="nickname" type='text' value={nickname} onChange={onChange}/>
            </li>
            <li>
                이름: <input name="name" type='text' value={name} onChange={onChange}/>
            </li>
            <li>
                주민번호: <input name="jmfront" type='text' value={jmfront} onChange={onChange}/> - <input name="jmback" type='text' value={jmback} onChange={onChange}/>
            </li>
        </ul>

        <button onClick={postEvent}>데이터 보내기</button>
    </div> 
  )
}

export default Form