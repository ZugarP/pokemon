import * as ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import React from "react";
import { Container, PokeList, Pokemon } from "./style/home";

export default function Home(){

    const [pokemons, setPokemons] = useState<any[]>([])
    const image_path ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])
    
  return(
    
        <Container>
            <h1>Pokedex</h1>
            <PokeList>
                {
                    pokemons.map( pokemon => {
                        const pokemon_id=pokemon.url.split('/') //aqui eu divido a url pelos / ai chamo dps chamo o pokemon_id[posição]
                        return(
                    
                            <Pokemon>
                                 <a href="#"><img src={`${image_path}${pokemon_id[6]}.png`} alt={pokemon.title} /></a>
                                <span>{pokemon.name}</span>
                            </Pokemon>
                        )
                    })
                }
            </PokeList>
        </Container>
    );
  
}