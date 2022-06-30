import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorsService {

  constructor() { }
}
export function getServerErrorMessage(error: HttpErrorResponse): string {
  switch (error.status) {
    case 404: {
      alert('Error 404: Not Found')
      return `Not Found: ${ error.message }`;
    }
    case 403: {
      alert('Error: Access Denied')
      return `Access Denied: ${ error.message }`;
    }
    case 500: {
      alert('Error: Internal Server Error')
      return `Internal Server Error: ${ error.message }`;
    }
    default: {
      alert('Error: Unknown server error')
      return `Unknown Server Error: ${ error.message }`;

    }
  }
}