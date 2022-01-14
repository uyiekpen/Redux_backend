import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addData } from './Global/BackEndReducer'

const UIscreen = () => {
    // const [getdata , setgetdata] = useState([])
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.BackEndReducer.datafile)
    
    const fetchData = async ()  =>{
        const result = await axios.get("http://localhost:3281/api")
        if (result){
            dispatch(addData(result.data.data))
            // console.log(result)
        }
    }

   useEffect(() => {
    fetchData()
   }, [])
    return (
        <Container>
            <Wrapper>
               {getdata?.map(({_id,name, email})=>(
                    <Card key={_id}>
                    <Name>{name}</Name>
                    <Email>{email}</Email>
                </Card>
                   ))
               }
            </Wrapper>
            
            
        </Container>
    )
}

export default UIscreen

const Email = styled.div`
padding: 20px 20px;

`
const Name = styled.div`

`
const Card = styled.div`
height: 200px;
width: 300px;
background-color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 10px;

`

const Wrapper = styled.div`
display: flex;
margin-right: 10px;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 0px 10px;

`
const Container = styled.div`

`