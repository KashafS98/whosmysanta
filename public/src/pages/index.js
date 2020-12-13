import { Typography } from 'antd';
import { GuestFormBasic } from '../components/FormComponent/form';
import { Container, HeaderWrapper } from './index.style'
import '../global.less'

export default function() {
  return (
    <>
      <HeaderWrapper>
          <Typography.Title level="2">Who's My Santa</Typography.Title>
        </HeaderWrapper>
        <Container>
          <div>
            <Typography.Paragraph >
              Hello, friends! Welcome to "WHO'S MY SANTA". Click on the add button to add all your friends participating in secret santa this year.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Make sure to add the correct email IDs before clicking on SUBMIT.
            </Typography.Paragraph>
            <Typography.Paragraph>
              We will shuffle up real nice and send each one of you an email stating who you will be a Secret Santa to this year. Have fun and soread the joy!
            </Typography.Paragraph>
          </div>
          <GuestFormBasic />
        </Container>
    </>
  );
}
