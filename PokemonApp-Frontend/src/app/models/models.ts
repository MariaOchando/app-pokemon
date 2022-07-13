//Abilities Model
export interface Ability {
  name: string;
  id: number;
  effect_entries: [effect, effect];
  generation: {
    name: string;
  };
}
interface effect {
  short_effect: string;
}

export interface TypePokemon {}

//Pokemons Model
export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: [PokemonAbilities, PokemonAbilities];
  types: [PokemonTypes];
}
interface PokemonAbilities {
  ability: {
    name: string;
  };
}
interface PokemonTypes {
  type: {
    name: string;
  };
}

//Types Model
export interface Type {
  name: string;
  id: number;
  move_damage_class: {
    name: string;
  };
  generation: {
    name: string;
  };
}
