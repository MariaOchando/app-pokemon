import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { getServerErrorMessage } from './handle-errors.service';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
 
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.pokemonsURL}/?limit=100000&offset=0`)
    .pipe(catchError(error => {
      let errorMsg: string;
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Error : ${ error.error.message }`;
   } else {
      errorMsg = getServerErrorMessage(error);
   }
   return throwError(() => error);
  }))
  }
  getByName(name:String) {
    return this.http.get(`${environment.pokemonsURL}/${name}`)
    .pipe(catchError(error => {
      let errorMsg: string;
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Error : ${ error.error.message }`;
   } else {
      errorMsg = getServerErrorMessage(error);
   }
   return throwError(() => error);
  }))
    .pipe(res => {
          return res;
        })
      }
  
}
