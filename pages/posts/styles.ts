import styled from "styled-components";

export const Main = styled.div`
    background-color: #000049;
    color: #ff9a00;
    margin-top: -1.5em;
`
export const H1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Posts = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Post = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 90px;
    border: 2px solid black;
    background-color: #ff9a00;
    color: #000049;
`

export const ContainerCard = styled.div`
    width: 100vw;
    background-color:  #ff9a00;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 300px;
    background-color: #000049;
    color:  #ff9a00;
    padding: 2em;

    button {
        background-color:  #ff9a00;
        color: #000049;
        border: 2px solid #ff9a00;
        height: 30px;
        width: 100px;
        border-radius: 15px;
    }
`