import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class  AbilitiesService {
 
  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.abilitiesURL}/?limit=100000&offset=0`)
  }

  getByName(name:String): Observable<any> {
    return this.http.get<any>(`${environment.abilitiesURL}/${name}`)
    .pipe(res => {
      return res;
    });
    
    
    
  // getByName(name:string) {
  //   return axios.get(`${this.url}/${name}`)
  //   .then(result => result.data)
  //   .then(data => {
  //     data.effect_entries.forEach()
  //   })
  // }

 
}
}
