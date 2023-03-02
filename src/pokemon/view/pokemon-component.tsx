import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getPokemonColorByType } from "../../utils/pokemon-colors";

import { Container, PokemonStyle } from "./style";
import PokemonEntity from "../model/pokemon-entity";
import PokemonLocationEntity from "../model/pokemon-location-entity";
import PokemonAbilityEntity from "../model/pokemon-ability-entity";
import PokemonTypeEntity from "../model/pokemon-type-entity";


interface Props{
    pokemon: PokemonEntity
};

export default class PokemonComponent extends React.Component<Props>{
    
    render(){

        const{pokemon}= this.props;

        if(pokemon !== undefined){
            return (
                <Container>
                    <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                        <Link to={{pathname:'/pokemon-details/', search:`?pokemon=${JSON.stringify(pokemon)}`}}>
                            <img src={pokemon.imageUrl} alt={pokemon.name}/>
                            </Link>
                        <span>{pokemon.name.toUpperCase()}</span>
                    </PokemonStyle>
                </Container>
            )
        }else{
            return(
                <div></div>
            )
        }  
    }
      
}
//mais