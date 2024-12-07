import React from 'react'
import styled from 'styled-components'
import srrc from '../imgs/thumbnail.webp';
import pfp from '../imgs/pfp.webp'
``
const Container = styled.div`
    width:300px;
    margin-bottom:36px;
    cursor:pointer;
    // background-color:powderblue;
`
const Image = styled.img`
height: 160px;
width:100%;
background-color:purple;
`
const Details = styled.div`
  display:flex;
  margin-top:12px;
  // height:120px;
  gap:8px;
  padding:10px;
  // background-color:red;
`
const ChannelImg = styled.img`
  width:28px;
  height:28px;
  border-radius:50%;
  background-color:blue;
`

const Texts = styled.div`
margin:center;
`
const Title = styled.h1`
  font-size:13px;
  font-weight:500;
  color: ${({theme})=>theme.text}
`
const ChannelName = styled.h2`
  font-size:12px;
  color: ${({theme})=>theme.textSoft};
  margin:10px,0px;

`
const Info = styled.div`
  font-size: 14px;

  color: ${({theme})=>theme.textSoft};

`
export default function Card() {
  return (
    <Container>
      <Image src={srrc}/>
      <Details>
        <ChannelImg src={pfp}/>
        <Texts>
          <Title>How to make good ui</Title>
          <ChannelName>Raycurve</ChannelName>
          <Info>400,348 views • 2 days ago</Info>
        </Texts>
      </Details>
    </Container>
  )
}
