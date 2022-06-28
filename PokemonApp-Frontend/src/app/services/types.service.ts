import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.typesURL}/?limit=100000&offset=0`)
  }

  getById(name:String): Observable<any> {
    return this.http.get<any>(`${environment.typesURL}/${name}`)
    .pipe(res => {
      return res;
    });

  // getByName(name:string) {
  //   return axios.get(`${this.url}/${name}`)
  //   .then (result => result.data);
    
  // }

  }
}
