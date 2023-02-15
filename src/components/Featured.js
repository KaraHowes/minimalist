import React from 'react';
import styled from 'styled-components'

const Featured = () => {
    return (
        <ArtContainer>
            <Image src="assets/concentric-01.png"/>
            <Image src="assets/monochrome-rainbowA4-01.png"/>
            <Image src="assets/i-v-flimsA4-01.png"/>
        </ArtContainer>
    )
}

export default Featured

const ArtContainer = styled.div`
display: flex;
width: 100;
margin: 50px auto;
`

const Image = styled.img`
display: flex;
flex-direction: row;
width: 25%;
margin: 10px auto;
box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
padding: 30px;`