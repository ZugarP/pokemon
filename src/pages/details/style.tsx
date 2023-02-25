import styled from "styled-components";

interface Props{
    color: string;
}

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;   
    justify-content: center; 
    background-color:${p=>p.color};
    height: 1081px;    
    overflow:hidden;
    
    h1{
        text-align: center;
        margin: 4rem;
    }

    p {
        line-height: 3px;
    }
`
export const HpText =styled.span`
    font-size:10px;
    font-weight:700;

    `;

export const PokemonStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;    
    border-radius: 1rem;
    border: 1px solid black;    
    justify-content: center;    
    background-color: #F5DEB3;
    padding: 3rem;

    img{
        height: 200px;
        margin-right: 2rem;
    }
    hr{
        width:250px;
        background-color:black;
        border:none;
        height:2px;
    }

    .pokemon-name{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        font-size: 2.0em;
        text-transform: capitalize;
    }
`;

export const Details = styled.div`
    display:flex;
    flex-direction: column;
    align-itnes: flex-start;
    width: 300px;

`;

export const LeftAlign = styled.div`
    align-self:flex-start;
`;
export const CenterAlign = styled.div`
    align-self:center; 
    
`;
export const RightAlign = styled.div`
    align-self:flex-end;
    
`;
//mais