import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const HeaderUI = styled.header`
    background: skyblue;
    height: 15%;
    font: bold;
`

const Header = () => {
    const navigate = useNavigate('');

    const backHome = (e) => {
        navigate("/");
    }
  return (
    <HeaderUI>
        <div style={{fontWeight:'bold'}}>개인 리액트 공부용입니다. 프로젝트 진행에 앞서 여러가지 것들을 list 형식으로 만들어볼 계획입니다.</div>
        <button onClick={backHome}>메인으로 이동</button>
    </HeaderUI>
  )
}

export default Header