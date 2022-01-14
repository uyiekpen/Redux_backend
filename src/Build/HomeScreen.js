import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { add,sub } from './Global/MainGlobal'
import InputForm from "./InputForm"
import UIscreen from './UIscreen'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const [count , setCount] = useState(0)

    const myValue = useSelector((state) => state.myReducer.value)
    
    // const add = () =>{
    //     setCount(count+1)
    // }


    // const sub = () =>{
    //     setCount(count-1)
    // }


    return (
        <Container>
          
            <Wrapper>
            <InputForm/>
                {/* <Counter>{myValue}</Counter> */}
               
                    <UIscreen/>
                    {/* <Add onClick={()=>{
                        dispatch(add())
                    }}>+</Add>
                    <Sub 
                    onClick={()=>{
                        dispatch(sub())
                    }}
                    >-</Sub> */}
               
            </Wrapper>
        </Container>
    )
}

export default HomeScreen

const Sub = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: thistle;
font-size: 20px;
font-family: poppins;
font-weight: bold;
`

const Add = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: thistle;
font-size: 20px;
font-family: poppins;
font-weight: bold;

`
const Counter = styled.div`
font-size: 20px;
font-family: poppins;
font-weight: bold;
width: 300px;
display: flex;
justify-content: center;
margin-bottom: 20px;
`


const Holder = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
justify-content: space-evenly;
`

const Wrapper = styled.div`
display:flex ;
flex-direction: column;
/* height: 300px;
width: 500px;
background-color: whitesmoke; */
border-radius: 12px;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
flex-direction:column ;
background-color: whitesmoke;

`