import axios from 'axios';
import React, {useState } from 'react'
import {useNavigate } from 'react-router-dom';

const Modal = () => {

    // env를 통해 안전하게 host name을 가져온다.
    const host = process.env.REACT_APP_HOST_NAME;

    const navigate = useNavigate();

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

    // 뒤로 가기
    const cancelFunc = () => {
        navigate("/");
    }

    // back api와 통신하기 위한 button
    const postFunc = async() => {
            console.log(inputs)
            console.log(host)
            try {await axios.post(
                `${host}/create`,
                inputs
            ).then(response => {
                console.log(response.data.status);
            })}
            catch (e) {
                console.log(e)
            };

            alert("데이터 보내기 완료.")
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

        <button onClick={cancelFunc}>뒤로 가기</button>
        <button onClick={postFunc}>데이터 보내기</button>
    </div> 
  )
}

export default Modal