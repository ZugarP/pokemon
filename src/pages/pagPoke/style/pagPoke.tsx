import styled from "styled-components";

export const Container=styled.div`

    justify-iten:center;
    display: grid;
    grid-template-columns: 10% 15% 50% 15% 10%;
    grid-template-rows:2rem 9rem 30rem 10rem;

    .centralizar{
        text-align: center;
        align-self: center;
        justify-self: center;
       
    }
    .textEffect{
        
        background: white;
        color: black;
        border-radius: 5rem;
        border:2rem solid white;
        
    }
    .nomeHabilidade{
        
    }
   

    #tamanhoImg{
        width: 30rem;
        
    }
    #centralizartxt{
        text-align:center;
    }
    .faixa{
        background-color:green;
        width:100%;
        height:100%;
    }
                        

  

`;

