import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ability {
  name: string,
  id: number,
  pokemons: string[],
}

@Injectable({
  providedIn: 'root'
})
export class  AbilitiesService {

  private url:string = "https://pokeapi.co/api/v2/ability";

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }

  getByName(name:string): Observable<any> {
    return this.http.get<any>(`${this.url}/${name}`)
    
    
    
  // getByName(name:string) {
  //   return axios.get(`${this.url}/${name}`)
  //   .then(result => result.data)
  //   .then(data => {
  //     data.effect_entries.forEach()
  //   })
  // }

 
}
}
