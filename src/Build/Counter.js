import React from 'react'
import styled from 'styled-components'

const Counter = ({count}) => {

    return (
        <Container>
            <Count>{count}</Count>

        </Container>
    )
}

export default Counter

const Count = styled.div`
font-size: 20px;
font-family: poppins;
font-weight: bold;
width: 300px;
display: flex;
justify-content: center;
margin-bottom: 20px;
`

const Container = styled.div``