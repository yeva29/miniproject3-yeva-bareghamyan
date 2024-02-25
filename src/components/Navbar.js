import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import Register from "../pages/Register.js"
import { Link, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Logout from '../pages/Logout'
import Product from './Product'
import { useSelector } from 'react-redux'



const Conatainer = styled.div`
`


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: '10px 0px'})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}
    
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fotnSize: '24px'})}
    
`


const Center = styled.div`
   flex: 1;
   text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: 'center'})}
`



const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    // const history = useHistory()
    // function logout(){
    //     localStorage.clear()
    //     history.push('/register')
    // }
    // const navigate = useNavigate();

    // const logout = () => {
    //   // 👇️ navigate programmatically
    //   navigate('/Home');
    // };
  return (
    <Conatainer>
        <Wrapper>
           
            <Left>
                <Language>EN</Language>
                 <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color:"grey", fontSize:"16px"}} />
                </SearchContainer>
            </Left>

            <Center><Logo><Link to='/Home'>LOGO</Link></Logo></Center>
            <Right>
                <MenuItem><Link to='/REGISTER'>REGISTER</Link></MenuItem>
                <MenuItem ><Link to='/Login'>SIGN IN</Link></MenuItem>
                <MenuItem><Link to='/Logout'>LOGOUT</Link></MenuItem>

                {/* logout */}
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <Link to='/Cart'><ShoppingCartOutlined /></Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Conatainer>
  )
}

export default Navbar

