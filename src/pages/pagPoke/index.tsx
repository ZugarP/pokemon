import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style/pagPoke";


export default function PagPoke(){
    const [pokemon, setPokemon]= useState<any[]>([])
    const {url}= useParams()
    
 
    

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response =>response.json())
        .then(data => setPokemon(data))

    },[url])

    return(
        <Container>
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar faixa"></div>{/*faixa da cor do tipo*/}
               <div className="centralizar faixa"><img src="" alt="" /></div>{/*faixa da cor do tipo*/}
               <div className="centralizar faixa "><h1 className="textEffect nomeHabilidade">Pikachu</h1></div>{/*faixa da cor do tipo*/}
               <div className="centralizar faixa"></div>{/*faixa da cor do tipo*/}
               <div className="centralizar faixa"></div>{/*faixa da cor do tipo*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div id="centralizartxt"><h1 className="textEffect">tipo escrito</h1></div>
               <div className="centralizar " ><img id="tamanhoImg"src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg" alt="" /></div>
               <div className="centralizar"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo voluptatum itaque facere culpa aspernatur quae veritatis reiciendis quibusdam autem? Atque impedit dolore optio nihil alias minus iusto! Commodi, molestias.</div>
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"></div>{/*vazio*/}
               <div className="centralizar"><h1 className="textEffect">peso do pokemon</h1></div>
               <div className="centralizar"><h1 className="textEffect nomeHabilidade">Habilidades do pokemon</h1></div>
               <div className="centralizar"><h1 className="textEffect">sexo</h1> </div>
               <div className="centralizar"></div>{/*vazio*/}

                

        </Container>
        
    );



};