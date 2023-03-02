import PokemonLocationEntity from "../pokemon-location-entity";


export async function fetchPokemonLocation(locationUrl): Promise<PokemonLocationEntity[]>{

    const locations: PokemonLocationEntity[]=[];

    const response = await fetch(locationUrl);
    const data = await response.json();

    data.slice(0,4).map(locaiton=>{
        locations.push(new PokemonLocationEntity(locaiton.location_area.name))
    });

    return locations;


};