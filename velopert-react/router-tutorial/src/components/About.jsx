import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import qs from 'qs';
import QueryString from 'qs';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const location = useLocation();
    const queryString = qs.parse(location.search, {
        ignoreQueryPrefix:true
    });
    console.log(QueryString);

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false: true});
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    }

  return (
    <div>
        <h1>소개</h1>
        <p>이 프로젝트는 React Router를 실습하는 프로젝트</p>
        
        <p>detail: {detail}</p>
        <p>mode: {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  )
}

export default About