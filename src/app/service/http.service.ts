import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  sendContactMessage(message: Message):Observable<any>{
    console.log(message);
      return this.http.post<any>(API_URL+"account/send-mail", message);
  }

}
