import { Component } from "react";
import styled from "styled-components";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { mobile, tablet } from "../responsive";

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
    width: 40%;
    padding: 20px;
    background-color:white;
    ${mobile({width:"75%"})}
    ${tablet({width:"75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;  
    flex-wrap:wrap;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border:none;
    border-bottom: 1px solid gray;
`;

const Aggrement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;
`;


class Register extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

         render(){return (
        <div>
            <Container>
            <Wrapper>
                <Title>I Do Not Have A Account</Title>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        type='text'
                        name='displayName'
                        value={this.displayName}
                        onChange={this.handleChange}
                        placeholder='Display Name'
                        required/>
                    <Input 
                        type='email'
                        name='email'
                        value={this.email}
                        onChange={this.handleChange}
                        placeholder='Email'
                        required/>
                    <Input 
                        type='password'
                        name='password'
                        value={this.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                        required/>
                    <Input 
                        type='password'
                        name='confirmPassword'
                        value={this.confirmPassword}
                        onChange={this.handleChange}
                        placeholder='Confirm Password'
                        required/>
                    <Aggrement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>.
                    </Aggrement>
                    <Button type="submit">Create</Button>
                </Form>
            </Wrapper>
        </Container>
        </div>

        );
  }
}

export default Register;