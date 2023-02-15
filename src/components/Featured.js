import React from 'react';
import styled from 'styled-components'

const Featured = () => {
    return (
      <ArtContainer>
        <Card>
          <Image src="assets/concentric-01.png" />
          <ArtTitle>Concentric</ArtTitle>
        </Card>
        <Card>
          <Image src="assets/monochrome-rainbowA4-01.png" />
          <ArtTitle>Rainbow</ArtTitle>
        </Card>
        <Card>
          <Image src="assets/i-v-flimsA4-01.png" />
          <ArtTitle>Waves</ArtTitle>
        </Card>
      </ArtContainer>
    );
}

export default Featured

const ArtContainer = styled.section`
display: flex;
width: 100;
margin: 50px auto;
`
const Card = styled.div`
width: 25%;
margin: 10px auto;`
const Image = styled.img`
width: 100%;
box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
padding: 30px;`

const ArtTitle = styled.h3`
text-align: center;
font-family: 'Nunito Sans', sans-serif;
font-size: 1.75rem;
`