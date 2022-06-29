import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {

  constructor( private http: HttpClient) { }

  pokemonsArray = [];

  getAllPokemons(): Observable<any> {
     return this.http.get(`${environment.pokemonsURL}/?limit=100000&offset=0`)
    }

  getAllAbilities(): Observable<any> {
      return this.http.get<any>(`${environment.abilitiesURL}/?limit=100000&offset=0`)
  }
  
  getAllTypes(): Observable<any> {
    return this.http.get<any>(`${environment.typesURL}/?limit=100000&offset=0`)
  }

}

