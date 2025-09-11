import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


export interface Client {
  id?: number;
  name: string;
  surname: string;
  email: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  
  readonly apiUrl = "http://localhost:8087/client/api/client"
  constructor(private http: HttpClient) {

   }

   getClients() {
    return this.http.get<Client[]>(this.apiUrl);
  }

  createClient(client: Client): Observable<any> {
    return this.http.post<any>(this.apiUrl, client)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
