import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
// import { Myname,
//     MyEmail} from "./Global/InputReducer"

const InputForm = () => {
    const [name , setName ] = useState("")
    const [email , setEmail ] = useState("")

    
    const PostData =async () => {
        const datafile = {name, email}
        await axios.post("http://localhost:3281/api", datafile)
    }

    return (
        <Container>
            <Form>
                <Input
                    placeholder='Name'
                    type="text"
                    value={name}
                    onChange={(e)=>{
                       setName(e.target.value)
                    }}
                />
                <Input
                    placeholder='Email'
                    value={email}

                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}

                />
                <ButtonHold
            onClick={()=>{
                console.log("button clicked:",name, email )
                PostData()
                // window.location.reload()
            }}
                >
                   
                    Submit</ButtonHold>

            </Form>
            
        </Container>
    )
}

export default InputForm

const ButtonHold = styled.button`
height: 50px;
width:100px;
font-family: poppins;
border: none;
border-radius: 5px;
`


const Input = styled.input`
height: 50px;
width: 250px;
margin: 0px 0px 10px;
border-radius: 4px;
outline: none;
border: none;
background-color: white;

::placeholder {
    font-family: poppins;
    padding: 10px;
}
`
const Form = styled.form`
height: 300px;
width: 300px;
display: flex;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div``
