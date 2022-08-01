import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile,tablet } from "../responsive";
import { Outlet } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword, signInWithGoogleRedirect } from "../firebase/firebase.utils";
import { useState } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
        ),
        url("https://i.postimg.cc/VkgT9yVw/pexels-spencer-selover-428340.jpg"),
        center;
            
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color:white;
    ${mobile({width: "75%"})}
    ${tablet({width: "68%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;  
    flex-direction:column;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;
    margin-bottom:5px;
`;



const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration:underline;
    cursor: pointer;
`;

const defaultFormFields = {
    email: "",
    password: "",
  };


const Login = () => {
    //login
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await signInAuthUserWithEmailAndPassword(email, password);
          resetFormFields();
        } catch (error) {
          console.log("user sign in failed", error);
        }
      };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
      };
    

    //google redirect
    const [isShow, setShow] = useState();
    const handleToggle = () => {
        setShow(isShow);
      };
    
    const GoogleButtonReddirect = () => {
        return (
            
          <button 
            onClick={signInWithGoogleRedirect} 
            type="button"
            style={{
                width: '40%',
                border:'none',
                padding: '15px 20px',
                backgroundColor:'teal',
                color:'white',
                cursor: 'pointer',
                marginBottom:'5px',
            }} >
                {'GOOGLE SIGN IN'}
          </button>
        );
      };
    

    return (
        <div>
            
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={email}
                        label='email'
                        required/>
                    <Input 
                        name='password'
                        type='password'
                        value={password}
                        onChange={handleChange}
                        label='password'
                        required/>
                    <Button type='submit'>LOGIN</Button>
                    <GoogleButtonReddirect onClick={handleToggle} />
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
            <Outlet/>
        </Container>
        </div>
    );
};



export default Login;