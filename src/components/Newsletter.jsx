import { SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    ${mobile({backgroundColor: "#faeef6"})}
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom:20px;
    ${mobile({fontSize: "50px"})}
`;
const Descriptions = styled.div`
    font-size: 24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({fontSize: "18px"})}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color:white;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({height: "30px"})}
`;
const Input = styled.input`
    border:none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;

const Newsletter = () => {
    return(
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Descriptions>Be first to get any updates.</Descriptions>
                <InputContainer>
                    <Input placeholder="Your email"/>
                    <Button>
                        <SendOutlined />
                    </Button>
                </InputContainer>
            </Container>
        </div>
    );
};

export default Newsletter;