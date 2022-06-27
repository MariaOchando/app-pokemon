import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export interface Pokemon {
  name: string,
  height: number,
  weight: number,
  id: number,

}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private url:string = "https://pokeapi.co/api/v2/pokemon";
 

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}?_limit=10`)
   
    
    //  .then(result => result.data.results)
  }

  getByName(name:string) {
    return axios.get(`${this.url}/${name}`)
    .then(result => result.data)
    .then(data => { 
      data.abilities.forEach((ability: { name: any }) => console.log(ability.name));
    })
  }

  
}
