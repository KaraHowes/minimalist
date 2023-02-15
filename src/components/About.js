import React from 'react';
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <LineContainer>
                <Line>
                <AboutTitle>ABOUT</AboutTitle>
                </Line>
            </LineContainer>
           <TextContainer>
           <AboutText>Lorem ipsum dolor sit amet. Bla bla I bla I art it's bla I how stuff creating bla let's bla I how cool cool me about about bla talk cool. Bla wonderful talk am stuff love and cool love bla about love bla cool creating and about stuff? Bla it's let's all bla I wonderful art about stuff am let's talk and it's bla I. Bla about love bla let's about am about creating me stuff talk bla it's love.

How it's let's me love love and about about art wonderful creating bla let's bla I. Art stuff wonderful and cool love and talk stuff art it's it's me it's it's I creating about. Bla creating talk bla let's let's art wonderful cool?</AboutText>  
               
         </TextContainer> 
            
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
  width: 90%;
  margin: 0 auto;  
`
const TextContainer = styled.div`
width: 100%;
display: flex;
margin: 0 auto;`
const LineContainer = styled.div`
padding: 0px 20px;
    position: relative;
    z-index: 1`
const AboutTitle = styled.span`
padding: 0px 20px;
position: relative;
z-index: 1;
background-color: white;`
const AboutText = styled.p`
text-align: center;
line-height: 2rem;
margin-bottom: 4rem;
font-family: 'Nunito Sans', sans-serif;`

const Line = styled.h2`
font-family: "Nunito Sans", sans-serif;
font-weight: 300;
width: 100%;
position: relative;
text-align: center;
margin-top: 6rem;
    &:before {
    content: "";
    display: block;
    border-top: 1px solid rgb(193, 193, 193);
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
}`