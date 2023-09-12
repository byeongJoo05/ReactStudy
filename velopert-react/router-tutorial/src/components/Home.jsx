import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>메인 페이지</p>
        <ul>
            <li>
                <Link to="/about">adam의 프로필</Link>
            </li>
            <li>
                <Link to="/jessica">jessica의 프로필</Link>
            </li>
            <li>
                <Link to="/profiles/hunt">존재하지 않는 프로필</Link>
            </li>
            <li>
                <Link to="/articles">게시글 목록</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home