import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemonsList: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
      this.pokemonsService.getAll()
      .subscribe(response => {
        this.pokemonsList = response.results;
        console.log(response);
      });
    }
  }

 

