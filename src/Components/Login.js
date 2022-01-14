import React, { useState } from 'react'
import styled from "styled-components"

import { app } from '../base';


const Login = () => {
    const [username, setUsername] =useState("")
    const [password, setpassword] =useState("")
    const [email, setemail] =useState("")

   
    const Register = async (e) => {
    
        const userData = await app
          .auth()
          .createUserWithEmailAndPassword(email, password);
    
        if (userData) {
          await app.firestore().collection("newUsers").doc(userData.user.uid).set({
            username,
            email,
            password,
          });
        }
    
      };
    
    return (
        <Container>
            <Wrapper>
                <LogoHolder>
                    <Logo src="/Image/logo.png"/>

                </LogoHolder>
                <Text>New to facebook...Register here</Text>
                <Form >
                    <Input placeholder='Name' 
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    />
                    <Input placeholder='Email'
                     value={email}
                     onChange={(e)=>{
                         setemail(e.target.value)
                     }}
                    />
                    
                    <Input placeholder='Password' 
                         value={password}
                         onChange={(e)=>{
                             setpassword(e.target.value)
                         }}
                    />
                    {/* <Input placeholder='confirm password'/> */}

                    <ButtonHolder>
                        <SubmitBotton type='submit' onClick={Register}>Submit</SubmitBotton>
                    </ButtonHolder>
                    <Space>Or</Space>
                <ButtonHolder2>
                        <SubmitBotton2>Sign up with Google</SubmitBotton2>
                </ButtonHolder2>
                </Form>
                
            </Wrapper>
            
        </Container>
    )
}

export default Login
const Space = styled.div``


const SubmitBotton2 = styled.button`
color:#176AE6 ;
height: 45px;
width: 150px;
border-radius: 3px;
border: none;
font-weight: bold;
:hover {
    transform: scale(0.97);
    cursor: pointer;
  }

`
const SubmitBotton = styled.button`
color:#176AE6 ;
height: 45px;
width: 150px;
border-radius: 3px;
border: none;
font-weight: bold;
:hover {
    transform: scale(0.97);
    cursor: pointer;
  }

`
const ButtonHolder = styled.div`
width: 300px;
height: 60px;
display: flex;
justify-content: center;
font-family:Poppins;
`

const ButtonHolder2 = styled.div`
width: 300px;
height: 60px;
display: flex;
justify-content: center;
font-family:Poppins;

`
const Label = styled.div`
  font-size: 13px;
  width: 250px;
  display: flex;
  justify-content: flex-start;`


const Input = styled.input`
height: 50px;
width: 280px;
border: none;
border-radius: 5px;
margin-bottom: 10px;
outline: none;
::placeholder{
    font-size: Poppins;
    color: grey;
}
`

const Form = styled.form`
height: 350px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`
const Text = styled.div`
margin-top: 20px;
`


const Logo = styled.img`
height: 100px;
width: 100px;
object-fit: cover;
`

const LogoHolder = styled.div`
height: 100px;
width: 100px;


`

const Wrapper = styled.div`
background-color: #176AE6;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Container = styled.div`
background-color: #176AE6;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-family: Poppins;
`