import { Component, OnInit } from '@angular/core';


import { filter } from 'rxjs';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-searchFilter',
  templateUrl: './searchFilter.component.html',
  styleUrls: ['./searchFilter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  pokemonsArray = [];
  pokemonName= "";

  constructor(private searchfilterService: SearchFilterService  ) { 
    this.filterPokemon();
  }
  filterPokemon(): void {
    this.searchfilterService.getAll()
    .subscribe(response => {
      this.pokemonsArray  = 
      response.results.filter((pokemon: string | string[]) => 
      pokemon.includes('pokemonName')) ;
      console.log(this.pokemonsArray)

    })
  }

  ngOnInit(): void {
  }

}
