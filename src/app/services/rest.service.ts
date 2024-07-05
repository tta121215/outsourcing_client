import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(`${environment.apiurl}${url}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(`${environment.apiurl}${url}`, JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(`${environment.apiurl}${url}`, JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiurl}${url}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
