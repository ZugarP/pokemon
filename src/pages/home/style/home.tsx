import styled from "styled-components";


export const Container =styled.div`

    h1{
        text-align:center;
        margin 4rem 0;

    }   

`;
export const PokeList = styled.ul`
    list-style:none;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    column-gap:3rem;
    row-gap:4rem;


`;
export const Pokemon= styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    

    img{
        width:180px;
        border-radius:10rem;
        margin-bottom:2rem;
        border-bottom: solid 1rem white;
        border-top: solid 1rem red;
    }


    span{

        font-weight:bold;
        font-size:120%;
        text-align:center;
        padding-top: 5px;
    }

    a{
        transition:0.3s;
    }

    a:hover{
        transform:scale(1.1);
        
    }
`;