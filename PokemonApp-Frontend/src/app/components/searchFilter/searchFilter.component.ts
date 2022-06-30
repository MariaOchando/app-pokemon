import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/services/search-filter.service';
import { Pokemon } from 'src/app/models/models';
import { Ability } from 'src/app/models/models';
import { Type } from 'src/app/models/models';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-searchFilter',
  templateUrl: './searchFilter.component.html',
  styleUrls: ['./searchFilter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  pokemonArray = [];
  abilityArray = [];
  typeArray= [];
  searchText= "";
  errorMsg: string | undefined;

  constructor(private searchfilterService: SearchFilterService, private router: Router  ) { 
    this.filterPokemon();
    this.filterAbility();
    this.filterAll();
    this.filterType();
    
  }

  async filterPokemon() {
    await this.searchfilterService.getAllPokemons()
    .subscribe(response => {
      this.pokemonArray  = response.results
      .filter((pokemon: Pokemon) =>
       pokemon.name === this.searchText) ;
        console.log(`pokemon${this.pokemonArray}`);
        if (this.abilityArray.length === 0 && this.typeArray.length === 0 && this.pokemonArray.length > 0) {
            this.router.navigate([`./pokemon/${this.searchText}`])
           }
    })
    }

    async filterAbility() {
     await this.searchfilterService.getAllAbilities()
     .subscribe(response => {
      this.abilityArray = response.results
      .filter((ability: Ability) =>
      ability.name === this.searchText) ;
      console.log(`ability${this.abilityArray}`);
      if (this.pokemonArray.length === 0 && this.typeArray.length === 0 && this.abilityArray.length > 0) {
            this.router.navigate([`./ability/${this.searchText}`])
          }
    })
  }

    async filterType() {
     await this.searchfilterService.getAllTypes()
     .subscribe(response => {
      this.typeArray= response.results
      .filter((type: Type) => type.name === this.searchText);
      console.log(`type ${this.typeArray}`);
      if (this.abilityArray.length === 0 && this.pokemonArray.length === 0 && this.typeArray.length > 0) {
            this.router.navigate([`./type/${this.searchText}`])
         }
    })
  }

//    

  filterAll(): void {
    this.filterAbility();
    this.filterPokemon();
    this.filterType();
   
   }


    


  ngOnInit(): void {
  }
}
