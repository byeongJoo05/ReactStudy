import React from 'react'
import styled from 'styled-components'

const FooterUI = styled.footer`
    background: orange;
`

const Footer = () => {
  return (
    <FooterUI>
        <div>작성자: 손병주</div>
        <div>깃 주소: <a href='https://github.com/byeongJoo05'>@byeongJoo05</a></div>
    </FooterUI>
  )
}

export default Footer