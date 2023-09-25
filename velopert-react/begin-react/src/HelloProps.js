import React from 'react'
// props(properties) 는 우리가 어떤 값을 컴포넌트에게 전달해줘야 할 때 사용함.
function HelloProps({color, name, isSpecial}) {
  return (
    <div style={{color}}>
        {/* 삼항연산자로 렌더링 작업물 조건 주기 */}
        {isSpecial ? <b>*</b> : null} 
        안녕하세요 {name}
    </div>
  )
}

HelloProps.defaultProps = {
    name: '이름없음'
}

export default HelloProps
