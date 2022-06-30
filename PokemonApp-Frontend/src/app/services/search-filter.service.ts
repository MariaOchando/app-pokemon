import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import {getServerErrorMessage} from 'src/app/services/handle-errors.service;


@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {

  constructor( private http: HttpClient) { }

  

  getAllPokemons(): Observable<any> {
     return this.http.get(`${environment.pokemonsURL}/?limit=100000&offset=0`)
     .pipe(catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error : ${ error.error.message }`;
     } else {
        errorMsg = this.getServerErrorMessage(error);
     }
     return throwError(() => error);
    }))
    }

  getAllAbilities(): Observable<any> {
      return this.http.get<any>(`${environment.abilitiesURL}/?limit=100000&offset=0`)
      .pipe(catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error : ${ error.error.message }`;
     } else {
        errorMsg = this.getServerErrorMessage(error);
     }
     return throwError(() => error);
    }))
  }
  
  getAllTypes(): Observable<any> {
    return this.http.get<any>(`${environment.typesURL}/?limit=100000&offset=0`)
    .pipe(catchError(error => {
      let errorMsg: string;
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Error : ${ error.error.message }`;
   } else {
      errorMsg = this.getServerErrorMessage(error);
   }
   return throwError(() => error);
  }))
  }


}

