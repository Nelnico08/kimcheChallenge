import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
`

export const Input = styled.input`
    max-width:150px;
    align-self:center;
    padding:0;
    border:none;
    padding:5px;
    border-radius:15px;

    &:focus{
        max-width:180px;
    }
`

export const GroupSection = styled.div`
    align-self:center;
`

export const H3 = styled.h3`
    color:#acebf7;
    text-shadow:2px 4px #270245;
    text-align:center;
    user-select: none;
`

export const Button = styled.button`
    margin:5px;
    width: 100px;
    height:30px;
    border:none;
    border-radius: 15px;
    color:#acebf7;
    font-weight:bold;
    ${(prop) => prop.active === 'true' ? 'background-color:#00b393' : 'background-color:#027eda'};

    &:hover{
        color: #78e1f6;
        background-color: #40acfb;
        text-shadow: 2px 1px #027eda;
    }
`