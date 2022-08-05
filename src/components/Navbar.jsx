import React, { Component } from "react";         //REACT
import { Link } from "react-router-dom"; 
import styled from 'styled-components';
import {auth } from "../firebase/firebase.utils";
import { connect } from "react-redux/es/exports"; //REDUX
import { Badge } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { mobile, tablet } from "../responsive";

//Styling With Styled Components
const Container = styled.div`
    height:60px;
    ${mobile({height: "60px" })}
`;

const Wrapper = styled.div`
    padding: 1px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})}
    ${tablet({padding:"10px 0px"})}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: space-around;
    ${mobile({justifyContent:"center"})}
`;

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding:5px;
    ${mobile({margin: "0px", height:"12px"})}
    ${tablet({margin: "0px", height:"15px", width:'60%'})}
`;

const Input = styled.input`
    border:none;
    display: flex;
    ${mobile({width:"50px"})}
    ${tablet({width:"90%"})}
`;

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"22px"})}
    ${tablet({fontSize:"25px"})}
`

const Center = styled.div`
    flex:1;
    text-align:center;
    ${mobile({flex:"1", justifyContent:"center"})}
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    flex-direction: row;
    ${mobile({flex:"1.5", justifyContent:"center"})}
    ${tablet({flex:"1", justifyContent:"center"})}
`;

const MenuItem = styled.div`
    font-size: 16px;
    cursor:pointer;
    margin-left: 25px;
    ${mobile({fontSize:"10px", margin: "0px 12px"})}
    ${tablet({fontSize:"15px", margin: "0px 12px"})}
`

//Navbar component starts here

const CustomMenuItem = () => {
    return (
      <div 
        onClick={() => auth.signOut()}
        type="button"
        style={{
            fontSize: '16px',
            cursor:'pointer',
            marginLeft: '25px',
        }} >
            {'Sign Out'}
      </div>
    );
  };

class Navbar extends Component {
    constructor(){
        super()

        this.state={
            signOut:''
        }
    }

    componentDidMount() {
        this.setState({signOut:true})
    }
    
    
    render(){
        return (
        <Container>
            {/*NAVBAR*/}
            <Wrapper>
                {/*NAVBAR LEFT CONTAINER[SEARCH BAR]*/}
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchOutlined style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                {/*NAVBAR CENTER CONTAINER[LOGO]*/}
                <Center>
                    <Logo>
                        <Link to="/">PURIN°</Link>
                    </Logo>
                </Center>
                {/*NAVBAR RIGHT CONTAINER[REGISTER, SIGN IN, CART]*/}
                <Right>
                    <div>
                    {
                        auth.currentUser ?
                        (<div>
                            <CustomMenuItem onClick={this.state.signOut}/>
                        </div>)
                        :
                        (<div style={{display:'flex', flexDirection:'row'}}>
                            <MenuItem><Link to='/register'>Register</Link></MenuItem>
                            <MenuItem><Link to='/login'>Sign In</Link></MenuItem>
                        </div>)


                    }
                    </div>
                    <MenuItem>
                        <Badge count="4" color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);