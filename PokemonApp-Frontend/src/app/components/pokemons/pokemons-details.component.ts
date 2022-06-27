import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.scss']
})
export class PokemonsDetailsComponent implements OnInit {

  constructor( 
    private pokemonsService:PokemonsService,
    private route: ActivatedRoute,
    ) 
    {

      

      const pokemonName = this.route.snapshot.paramMap.get('pokemon');
      this.pokemonsService.getByName(String(pokemonName))
      .then((result => {
      console.log(result);
    }))
   }

  ngOnInit(): void {
  }

}
