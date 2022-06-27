import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Type {
  name: string,
  id: number,
  generation: string,
}

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  private url:string = "https://pokeapi.co/api/v2/type";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }

  // getByName(name:string) {
  //   return axios.get(`${this.url}/${name}`)
  //   .then (result => result.data);
    
  // }

  
}
