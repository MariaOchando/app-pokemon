import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
 
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.pokemonsURL}/?limit=100000&offset=0`)
  }
  getByName(name:String) {
    return this.http.get(`${environment.pokemonsURL}/${name}`)
      .pipe(res => {
          return res;
        })
      }
  // getByName(name:string) {
  //   return axios.get(`${this.url}/${name}`)
  //   .then(result => result.data)
  //   .then(data => { 
  //     data.abilities.forEach((ability: { name: any }) => console.log(ability.name));
  //   })
  // }

  
}
