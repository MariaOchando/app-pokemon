import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/services/search-filter.service';
import { Pokemon } from 'src/app/models/models';
import { Ability } from 'src/app/models/models';
import { Type } from 'src/app/models/models';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  constructor(private searchfilterService: SearchFilterService, private router: Router  ) { 
    this.filterPokemon();
    this.filterAbility();
    this.filterAll();
  }
  filterPokemon(): void {
    this.searchfilterService.getAllPokemons()
    .subscribe(response => {
      this.pokemonArray  = response.results
      .filter((pokemon: Pokemon) =>
       pokemon.name === this.searchText) ;
        console.log(`pokemon${this.pokemonArray}`)
    })
    }

  filterAbility(): void {
    this.searchfilterService.getAllAbilities()
    .subscribe(response => {
      this.abilityArray = response.results
      .filter((ability: Ability) =>
      ability.name === this.searchText) ;
      console.log(`ability${this.abilityArray}`)
    })
  }

  filterType(): void {
    this.searchfilterService.getAllTypes()
    .subscribe(response => {
      this.typeArray= response.results
      .filter((type: Type) => type.name === this.searchText);
      console.log(`type ${this.typeArray}`)
    })
  }
  redirectFunction(): void {
    
    if (this.abilityArray.length === 0 && this.typeArray.length === 0 && this.pokemonArray.length > 0) {
      this.router.navigate([`./pokemon/${this.searchText}`])
  }
    else if (this.pokemonArray.length === 0 && this.typeArray.length === 0 && this.abilityArray.length > 0) {
      this.router.navigate([`./ability/${this.searchText}`])
    }
    else if (this.abilityArray.length === 0 && this.pokemonArray.length === 0 && this.typeArray.length > 0) {
      this.router.navigate([`./type/${this.searchText}`])
    }
    // else {
    //   alert("Write a valid pokemon, type or ability")
    // }
    
      
    
}

  filterAll(): void {
    this.filterAbility();
    this.filterPokemon();
    this.filterType();
    this.redirectFunction();
  }


    
  

  ngOnInit(): void {
  }
}

