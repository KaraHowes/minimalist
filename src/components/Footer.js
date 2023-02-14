import React from 'react';
import styled from 'styled-components'

const Footer = () => {

    return(
        <FooterContainer>
            <Logo src="assets/logo2.png"/>
            <Text>Kara Howes</Text>
        </FooterContainer>
       
    )
}

export default Footer



const FooterContainer = styled.div`
background-color: black;`
const Text = styled.h2`
color: white;
font-family: 'Open Sans', sans-serif;
font-weight: 400;
font-size: 1.5rem;
text-align: center;
padding: 15px;
`

const Logo = styled.img`
width: 100px;
margin: 0 auto;
padding: 15px 0;
display: block;`