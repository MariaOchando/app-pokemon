import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getServerErrorMessage } from './handle-errors.service';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get<any>(`${environment.abilitiesURL}/?limit=100000&offset=0`)
      .pipe(
        catchError((error) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error : ${error.error.message}`;
          } else {
            errorMsg = getServerErrorMessage(error);
          }
          return throwError(() => error);
        })
      );
  }

  getByName(name: String): Observable<any> {
    return this.http
      .get<any>(`${environment.abilitiesURL}/${name}`)
      .pipe(
        catchError((error) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error : ${error.error.message}`;
          } else {
            errorMsg = getServerErrorMessage(error);
          }
          return throwError(() => error);
        })
      )
      .pipe((res) => {
        return res;
      });
  }
}
