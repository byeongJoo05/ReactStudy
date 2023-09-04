import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <b>개인 리액트 공부용입니다. 프로젝트 진행에 앞서 여러가지 것들을 list 형식으로 만들어볼 계획입니다.</b>
        <ul>
            <li><Link to="/modal">모달 연습</Link></li>
            <li><Link to="/list">리스트 조회받기 연습</Link></li>
        </ul>
    </div>
  )
}

export default Home