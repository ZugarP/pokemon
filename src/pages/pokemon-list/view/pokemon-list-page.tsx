import React from "react";
import PokemonComponent from './pokemon-component';
import { Container, PokemonList } from './style';


interface Props{
    pokemonsPromises: any[];
}


export default class PokemonListPage extends React.Component<Props> {

    render(){
        const {pokemonsPromises}= this.props;
        const pokemons = pokemonsPromises; 

        return (
            <Container>
                <h1>Pokémon</h1>
                <div>
                    <PokemonList>
                        {
                            pokemons.map(pokemon => {
                                return (
                                    <PokemonComponent promissed_pokemon={pokemon}>     
                                                            
                                    </PokemonComponent>
                                )
                            })
                        }
                        
                    </PokemonList>
                </div>
            </Container>
        )
    }
}
 //mais 
