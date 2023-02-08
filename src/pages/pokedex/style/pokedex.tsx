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
    grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
    column-gap:3rem;
    row-gap:4rem;
`;
export const Pokemon = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        width:180px;
        border-radius:1rem;
        
    }
    span{
        font-weight:bold;
        font-size:120%;
        text-align:center;
        opacity:0.8;
    }
    a{
        transition:0.3s;
    }
    a:hover{
        transform:scale(1.1);
    }
`;

export const Pokedex = styled.div`
    background-color:red;
    height:43rem;
    width:25rem;
    index:0;
    border-radius:1rem;
`;
export const PokeHeader = styled.header`
    background-color: purple;
    width: 25rem;
    height:7rem;
    display: flex;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-bottom:3rem;
    #primario{
       border-radius:100%;
       border:solid 2px;
       border-color:grey;
       background-color:blue;
       width:60px;
       height:60px;    
       margin: 1.5rem 1rem;
    }
    .tamanho{
        border-radius:100%;
        width:7px;
        height:7px;
        margin: 1rem 3px;
    }
    #segundo{
        background-color:red;
    }
    #terceiro{
        background-color:yellow;
    }
    #quarto{
        background-color:green;
    }
`;

export const PokeBody = styled.div`
    #container{
        display:flex;
        background-color:pink;
        margin:1rem 2.5rem;
        height:10rem;
        width:20rem;
    }
    .horizontal{
        height:1rem;
        width:3rem;
    }
    .vertical{
        height:3rem;
        width:1rem;
    }
    #buttons{
        
    }
    #confirmar {
        border-radius:50%;
        height:3rem;
        width:3rem;
    }
`;

export const PokeTela = styled.div`
    background-color:grey;
    width:20rem;
    height:20rem;
    margin-left:2.5rem;
    display:flex;
    border-radius:1rem;
    border-bottom-left-radius:4rem;
    div{
        background-color:black;
        width:15rem;
        height:15rem;
        margin:2.2rem;
        border-radius:1rem;
    
    }
    
`;