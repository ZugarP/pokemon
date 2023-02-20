import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import PokemonAbilityEntity from "./entities/pokemon-ability-entity";
import PokemonEntity from "./entities/pokemon-entity";
import PokemonLocationEntity from "./entities/pokemon-location-entity";
import PokemonTypeEntity from "./entities/pokemon-type-entity";
import { PokemonStyle } from "./style/home";

export default function Pokemon(props:any){
    const [pokemon, setPokemon] = useState<PokemonEntity>()

    async function getPokemonLocations(locationUrl:string):Promise<PokemonLocationEntity[]>{
        var locations:PokemonLocationEntity[] = [];
        var response = await fetch(locationUrl);
        var data = await response.json();

        data.map(location =>{
            locations.push(new PokemonLocationEntity(location.location_area.name));
        })
        return locations;

    };

    function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(async data => {
            if(data.id !== undefined){

                var pokemonAbilities:PokemonAbilityEntity[] = [];
                var pokemonTypes:PokemonTypeEntity[] = [];
                var pokemonLocations:PokemonLocationEntity[] = [];

                data.abilites.map(pokemonAbility => {
                    pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name) )
                });
                
                data.types.map(pokemonType=>{
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                });

                pokemonLocations = await getPokemonLocations(data.location_area_encounters);
                
                
                var pokemonEntity: PokemonEntity;
                pokemonEntity = new PokemonEntity(data.id,data.name,pokemonTypes,pokemonLocations,pokemonAbilities,data.base_experience)

                setPokemon(pokemonEntity)
                
            }
        })
    }

    useEffect(() => getPokemonByPromise(props.promissed_pokemon), [])

    if(pokemon !== undefined){
        return (
            <Container>
                <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name}/>
                    <span>{pokemon.name}</span>
                </PokemonStyle>
            </Container>
        )
    }else{
        return(
            <div></div>
        )
    }    
}