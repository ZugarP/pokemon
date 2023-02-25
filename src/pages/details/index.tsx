import React, { useState, useEffect } from "react";
import { pokemonLocal } from "../../utils/consts";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import PokemonEntity from "../home/entities/pokemon-entity";
import { CenterAlign, Container, Details, HpText, LeftAlign, PokemonStyle, RightAlign } from "./style";
import { useParams, useSearchParams } from "react-router-dom";

export default function PokemonDetails(){

    const [pokemon, setPokemon]= useState<PokemonEntity>(pokemonLocal as PokemonEntity)
    const [searchParams] = useSearchParams();

    useEffect(()=>{
        var data = JSON.parse(searchParams.get('pokemon'));
        setPokemon(data as PokemonEntity)
    },[])
    
    return(
            <Container color={getPokemonColorByType(pokemon.types[0].name)}>
                    <PokemonStyle>
                        <img src={pokemon.imageUrl} alt={pokemon.name}/>
                        <span className="pokemon-name">{pokemon.name}</span >
                        <hr />
                        <HpText>{`HP ${pokemon.hp}`}</HpText>
                        <Details>
                            <LeftAlign>
                                <h4>Habilidades</h4>
                                {
                                    pokemon.abilities.map(ability=>{
                                        return(
                                            <p><span>{ability.name}</span></p>
                                        )
                                    })
                                }
                            </LeftAlign>
                            <CenterAlign>
                                <h4>Localização</h4>
                                {
                                    pokemon.locations.map(location=>{
                                        return(
                                            <p><span>{location.name}</span></p>
                                        )
                                    })
                                }
                            </CenterAlign>
                            <RightAlign>
                                <h4>Tipo</h4>
                                {
                                    pokemon.types.map(type=>{
                                        return(
                                            <p><span>{type.name}</span></p>
                                        )
                                    })
                                }
                            </RightAlign>
                        </Details>
                    </PokemonStyle>
                </Container>
    )
} 