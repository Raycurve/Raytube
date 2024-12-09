import {React} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import srrc from '../imgs/thumbnail.webp';
import pfp from '../imgs/pfp.webp'
``
const Container = styled.div`
    width:${(props)=>props.type !== "sm" && "300px"};
    margin-bottom:${(props)=>props.type === "sm"?"8px":"36px"};
    cursor:pointer;
    display: ${(props)=>props.type === "sm" && "flex"};
    
`
const Image = styled.img`
  height: ${(props)=>props.type === "sm"?"96px":"160px"};
  width:100%;
  flex:1;
`
const Details = styled.div`
  display:flex;
  margin-top:${(props)=>props.type !== "sm" && "12px"};
  // height:120px;
  gap:8px;
  padding:${(props)=>props.type === "sm"?"0px 10px":"10px"};
  flex:1;
  // background-color:red;
`
const ChannelImg = styled.img`
  width:28px;
  height:28px;
  border-radius:50%;
  display: ${(props)=>props.type === "sm" && "none"};
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
export default function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    
      <Container type = {type}>
        <Image type={type} src={srrc}/>
        <Details type = {type}>
          <ChannelImg type={type} src={pfp}/>
          <Texts>
            <Title>How to make good ui</Title>
            <ChannelName>Raycurve</ChannelName>
            <Info>400,348 views • 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
