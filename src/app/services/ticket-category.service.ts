import { TicketCategory } from '../models/ticket-category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketCategoryService {
  public url = 'https://localhost:5003/TicketCategory';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TicketCategory[]> {
    return this.http.get<TicketCategory[]>(this.url + '/GetAll');
  }

  create(obj: TicketCategory): Observable<TicketCategory> {
    return this.http.post<TicketCategory>(this.url + '/Create', obj, {
      headers: this.headers,
    });
  }

  update(obj: TicketCategory): Observable<TicketCategory> {
    return this.http.post<TicketCategory>(this.url + '/Update', obj, {
      headers: this.headers,
    });
  }

  remove(obj: TicketCategory): void {
    this.http.post(this.url + '/Delete', obj).subscribe();
  }
}
