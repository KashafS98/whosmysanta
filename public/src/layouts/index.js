import { Typography } from 'antd';
import { GuestFormBasic } from '../components/FormComponent/form';
import { Container, Wrapper, HeaderWrapper } from './layout.style'
import bg from '../assets/xmas.jpg'
import './index.css'

function BasicLayout(props) {

  return (
    <div style={{ background: `url(${bg})`, backgroundRepeat: 'repeat', minHeight: '100vh' }}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </div>

  );
}

export default BasicLayout;
