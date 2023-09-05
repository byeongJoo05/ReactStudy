import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <b>메인 페이지입니다.</b>
        <ul>
            <li><Link to="/modal">모달 연습</Link></li>
            <li><Link to="/list">리스트 조회받기 연습</Link></li>
        </ul>
    </div>
  )
}

export default Home