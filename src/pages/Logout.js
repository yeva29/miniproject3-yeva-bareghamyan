import styled from "styled-components"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { useEffect} from "react";
import Home from "../pages/Home"
import { Navigate, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import user from '../App'
import { TOKEN, deleteUserToken, delete_token } from "../requestMethod";
import axios from "axios";
import { log_out } from "../redux/apiCalls";
import { Dialpad } from "@material-ui/icons";
// import { delete_token } from "../requestMethod"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
     rgba(255, 255, 255, 0.5)),
     url("https://home.kpmg/content/dam/kpmg/xx/images/2021/08/white-dots-connected-texture-over-navy-blue-background.jpg") center;
     background-size: cover;
     overflow: hidden;
     display: flex;
     align-items: center;
     justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: '75%'})}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: gray;
    }
`
const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const user = useSelector((state) => state.user.currentUser);
    function handleLogout(e) {
        e.preventDefault();
        console.log(user._id)
        log_out(dispatch,{user})
        navigate('/');
    }

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>

            <Button onClick={handleLogout}>Create</Button>
       
      </Wrapper>
    </Container>
  )
}

export default Logout
