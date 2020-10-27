import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signage } from '../models/signage.model';

@Injectable({
  providedIn: 'root'
})
export class SignageService {

  public url = 'https://localhost:5003/Signage';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Signage[]> {
    return this.http.get<Signage[]>(this.url + '/GetAll');
  }

  create(obj: Signage): Observable<Signage> {
    return this.http.post<Signage>(
      this.url + '/Create',
      obj,
      {
        headers: this.headers,
      }
    );
  }

  update(obj: Signage): Observable<Signage> {
    return this.http.post<Signage>(
      this.url + '/Update',
      obj,
      {
        headers: this.headers,
      }
    );
  }

  remove(obj: Signage): void {
    this.http
      .post(this.url + '/Delete', obj)
      .subscribe();
  }
}
