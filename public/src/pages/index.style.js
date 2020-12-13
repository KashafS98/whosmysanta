import styled from 'styled-components';
import { respondTo } from '../utils/styles/_respondTo'
import { Layout } from 'antd'
import cardBg from '../assets/xmas2.jpg'

const { Content, Header } = Layout;

export const Wrapper = styled(Layout)`
background: transparent;
width: 100%;
h1{
  color: #005e5f
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Cinzel Decorative', cursive;
}
p{
  font-family: 'Raleway', sans-serif;
}
`

export const HeaderWrapper = styled(Header)`
  background: #8eb6c2ba;
  text-align: center;
  color: white;
  padding: 2%;
  height: 12vh;
  `

export const Container = styled(Content)`
  background: url(${cardBg});
  background-position: center;
  padding: 3%;
  ${respondTo.lg`
    width: 40vw;
    margin: 2% auto;
  `}

  ${respondTo.md`
    width: 40vw;
    margin: 2% auto;
  `}

  margin-top:2%;
`