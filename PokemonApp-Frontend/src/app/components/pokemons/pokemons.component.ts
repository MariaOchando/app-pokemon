import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/models/models';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {

  pokemonsList: Pokemon[] = [];
  p: number = 1;
  collection: Pokemon[] = this.pokemonsList; 
  errorMsg: string | undefined;


  constructor(private pokemonsService: PokemonsService) {
    this.getAll();
   }
    getAll(): void {
     this.pokemonsService.getAll()
    .pipe(catchError(error => {
      this.errorMsg = error.message;
      return of([]);
   }))
   .subscribe(response => {
     this.pokemonsList = response.results;
     console.log(this.pokemonsList);
   }  
   )
  }

  ngOnInit(): void {
      
    }
  }

 

