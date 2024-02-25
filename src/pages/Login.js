import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import { login } from "../redux/apiCalls";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
     rgba(255, 255, 255, 0.5)),
     url("https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80") center;
     overflow: hidden;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: '75%'})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &::disabled{
        color: green;
        cursor: not-allowed;
    }

    &:hover{
        background-color: gray;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispath = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick=(e)=>{
       e.preventDefault();
       login(dispath, {username, password})
    }
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>

            <Form>
                <Input placeholder="username"
                    onChange={(e) =>setUsername(e.target.value)}
                 />
                <Input placeholder="password"
                type="password"
                     onChange={(e) =>setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                { error && <Error>Something went wrong...</Error>}
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>

  )
}

export default Login
