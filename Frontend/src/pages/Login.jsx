import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:${({theme})=>theme.text};
    height:calc(100vh - 45px);
    // width:100px;
    // background-color: red;
`
const Title = styled.h1`    
    font-size:24px;

`
const SubTitle = styled.h2`
    font-size:15px;
    font-weight:300;

`
const Input = styled.input`
    border-radius: 3px;
    border:1px solid ${({theme})=>theme.soft2};
    padding:10px;
    background-color:transparent;
    width:100%;
    color: ${({theme})=>theme.text};

`
const Button = styled.button`
    padding:7px 20px;
    border-radius:3px;
    border:none;
    font-weight:500;
    cursor:pointer;
    background-color: ${({theme})=>theme.soft2};
    color: ${({theme})=>theme.textSoft};

`
const More = styled.div`
    display:flex;
    font-size:10px;
    color: ${({theme})=>theme.textSoft};

`
const Links = styled.div`
    margin-left:40px;
`

const Link = styled.span`
    margin-left:30px;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    background-color:${({theme})=>theme.bgLighter};
    border:1px solid ${({theme})=>theme.soft};
    padding: 20px 50px;
    gap:8px;
`
export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to RayTube</SubTitle>
            <Input placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign in</Button>

            <Title>or</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English (USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}
