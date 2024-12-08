import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';

const Container = styled.div`
    padding:20px  50px;
    display:flex;
    gap:20px;
`
const Content = styled.div`
  flex:5;
  // background-color:red;
`

const VideoWrapper = styled.div`
`

const Title = styled.h1`
  font-size:14px;
  font-weight:400;
  margin-top:15px;
  margin-bottom:8px;
  color: ${({theme})=>theme.text};

`
const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const Info = styled.span`
  color: ${({theme})=>theme.textSoft};
`
const Buttons = styled.div`
  display:flex;

  gap:18px;
  align-items:center;
`
const Button = styled.div`
  color:${({theme})=>theme.text};
  display:flex;
  align-items:center;
  gap:4px;
  cursor:pointer;
`
const Hr = styled.hr`
  margin:15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`
const Recom = styled.div`
  flex: 2;
  background-color:grey;
`
export default function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper><iframe width="880" height="495" src="https://www.youtube.com/embed/Vitf8YaVXhc" title="I never understood why you can&#39;t go faster than light - until now!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></VideoWrapper>
        <Title>Test vid</Title>
        <Details>
          <Info>400,348 views • 2 days ago</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon/>
              Like
            </Button>
            <Button>
              <ThumbDownIcon/>
              Dislike
            </Button>
            <Button>
              <ReplyIcon/>
              Share
            </Button>
            <Button>
              <BookmarkIcon/>
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
      </Content>

      <Recom>Recommendations</Recom>
    </Container>
  )
}
