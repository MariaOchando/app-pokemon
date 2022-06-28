import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/models';


@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.scss']
})
export class PokemonsDetailsComponent implements OnInit {

    //specify info we want
  pokemon: Pokemon = {
    name: "",
    height: 0,
    weight: 0,
    id: 0,
    abilities: [{
      ability: {
        name: "",
      },
    } ,
    { ability: {
        name: "",
  },
}],}

  constructor( 
    private pokemonsService:PokemonsService,
    private route: ActivatedRoute,
    ) 
    {
      this.loadPokemon();
    }
      loadPokemon() : void {
      const pokemonName = this.route.snapshot.paramMap.get('pokemon');
      this.pokemonsService.getByName(String(pokemonName))
      .subscribe((result: any) => {
        this.pokemon = result;
      console.log(result);
    })
   }

  ngOnInit(): void {
 
  }

}
