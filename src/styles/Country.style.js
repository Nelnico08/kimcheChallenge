import styled from "styled-components";

export const CountryContainer =  styled.main`
    width:180px;
    height:250px;
    background-color:#9326ed;
    border: double 5px  black;
    padding: 5px;
    border-radius: 15px;
    box-shadow: 2px 4px #270245;
    margin: 5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const CountryName = styled.div`
    display: flex;
    justify-content:center;
`

export const Paragraph = styled.p`
    color:#acebf7;
    ${(prop) => prop.type === 'description' ? 'text-align: center' : null};
`