import * as ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import React from "react";
import { Container, PokemonList } from "./style/home";
import { Link } from 'react-router-dom';
import Pokemon from './components';

export default function Home() {

    const [pokemons, setPokemons] = useState<any[]>([])

    function getPokemons(){
        var pokemonPromises = [];
        for(var i=1;i<11;i++){
            pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }
        console.log(pokemonPromises)
        setPokemons(pokemonPromises)
    }

    useEffect(()=>getPokemons(), [])

    return (
        <Container>
            <h1>Pokémon</h1>
            <div>
                <PokemonList>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokemon promissed_pokemon={pokemon}>     
                                                           
                                </Pokemon>
                            )
                        })
                    }
                    
                </PokemonList>
            </div>
        </Container>
    )
}
  
