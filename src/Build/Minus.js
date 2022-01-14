import React,{useState} from 'react'
import styled from 'styled-components'

const Plus = ({sub}) => {
   
    return (
        <Container>
              <Holder>
                    <Add onClick={sub}>-</Add>
                   
                </Holder>
            
        </Container>
    )
}

export default Plus


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
const Holder = styled.div`
display: flex;
width: 300px;
justify-content: space-between;
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

const Container = styled.div``
