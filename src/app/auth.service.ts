import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// export class AuthService {
//   private baseUrl = 'http://localhost:8087/client/api/client';

//   constructor(private http: HttpClient) { }

//   inscrireUtilisateur(utilisateur: any): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}`, utilisateur);
//   }

//   register(user: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}`, user);
//   }

//   getUsers(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/users`);
//   }

//   login(credentials: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/authenticate`, credentials);
//   }
// }
export class AuthService {


  private apiUrl = 'http://localhost:8087/client/api/client'; // Base URL de votre backend
  private creaction = 'http://localhost:8087/client/api/create'; //Api pour la creaction client

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/${email}/${password}`;
  
    return this.http.get(url, {responseType: 'text'});
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.creaction, user);
  }

  
}
