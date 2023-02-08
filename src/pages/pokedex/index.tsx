import { useEffect, useState } from "react";
import { Container, PokeBody, Pokedex, PokeHeader, PokeList, Pokemon, PokeTela } from "./style/pokedex";





export default function PokedexPage(){

    
    const url_base = "https://pokeapi.co/api/v2/pokemon"
    const image_path = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    
    const [pokemon, setPokemon]= useState<any[]>([])
    

    useEffect(()=>{
        fetch(`${url_base}`)
        .then(response=>response.json())
        .then(data=>setPokemon(data.result))
    },[])


      
    
    return(
            
        <Container>
            <Pokedex>
                <PokeHeader>
                    <div id="primario"></div>
                    <div id="segundo" className="tamanho"></div>
                    <div id="terceiro" className="tamanho"></div>
                    <div id="quarto" className="tamanho"></div>                   
                </PokeHeader>
                <PokeBody>
                    <PokeTela>
                        <div>
                            <PokeList>
                                {
                                    pokemon.map(pokemon=>{
                                        const poke_id=pokemon.url.split('/')
                                        return(
                                            <Pokemon>
                                                <a href=""><img src={`${image_path}${poke_id[6]}.png`} alt="" /></a>
                                                <span>pokemon</span>
                                            </Pokemon>                                               
                                        )
                                    })
                                }          
                             </PokeList>
                        </div>
                    </PokeTela>
                        <div id="container">
                            
                                <button id="confirmar">Confirma</button>
                                <div id="analogico">
                                    <button className="horizontal">Anterior</button>
                                    <button className="vertical">Mais Informação</button>
                                    <button className="horizontal">Proximo</button>
                                    <button className="vertical">Tipo</button>
                                </div>
                            
                        </div>
                </PokeBody>
                
                
            </Pokedex>

        </Container>

    );
    
}