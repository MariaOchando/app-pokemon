//Abilities Model
export interface Ability {
    name: string,
    id: number,
    effect_entries: [
      effect, 
      effect
     ],
    generation: {
      name: string,
     }
  }
  interface effect  {
    short_effect: string;
  }

 
  



//Pokemons Model
export interface Pokemon {
    name: string,
    height: number,
    weight: number,
    id: number,
    abilities: [
      PokemonAbilities,
      PokemonAbilities,
    ]
  }
  interface PokemonAbilities {
    ability: {
     name: string;
    }
  }

  
//Types Model
export interface Type {
    name: string,
    id: number,
    move_damage_class: {
      name: string,
    },
    generation: {
        name: string,
    }
  }