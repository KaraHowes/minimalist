import React from 'react';
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>ABOUT</AboutTitle>
            <AboutText>Lorem ipsum dolor sit amet. Bla bla I bla I art it's bla I how stuff creating bla let's bla I how cool cool me about about bla talk cool. Bla wonderful talk am stuff love and cool love bla about love bla cool creating and about stuff? Bla it's let's all bla I wonderful art about stuff am let's talk and it's bla I. Bla about love bla let's about am about creating me stuff talk bla it's love.

How it's let's me love love and about about art wonderful creating bla let's bla I. Art stuff wonderful and cool love and talk stuff art it's it's me it's it's I creating about. Bla creating talk bla let's let's art wonderful cool?</AboutText>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.section`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 60%;
`
const AboutTitle = styled.h2`
text-align: center;
font-family: 'Nunito Sans', sans-serif;`
const AboutText = styled.p`
text-align: center;
line-height: 2rem;
margin-bottom: 50px;
font-family: 'Nunito Sans', sans-serif;`