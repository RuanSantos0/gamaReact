import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    fex-direction: column;
    align-item: center;
    justify-content: center;
    height: 100vh;  
`

export const Content = styled.div`
    margin: 1rem 0;
    width: 100vw;
    display: flex;
    align-item: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
` 

export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const ErrorMsg = styled.p`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`