import { TerminalCategory } from './../models/terminal-category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Terminal } from '../models/terminal.model';
import { TerminalSignage } from '../models/terminal-signage.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  public url = 'https://localhost:5003/Terminal';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Terminal[]> {
    return this.http.get<Terminal[]>(this.url + '/GetAll');
  }

  create(obj: Terminal): Observable<Terminal> {
    return this.http.post<Terminal>(this.url + '/Create', obj,
      {
        headers: this.headers,
      }
    );
  }

  createTerminalCategory(terminalCategory: TerminalCategory): Observable<TerminalCategory> {
    return this.http.post<TerminalCategory>(this.url + '/CreateTerminalCategory', terminalCategory ,
      {
        headers: this.headers,
      }
    );
  }

  deleteTerminalCategory(terminalCategory: TerminalCategory): Observable<TerminalCategory> {
    return this.http.post<TerminalCategory>(this.url + '/DeleteTerminalCategory', terminalCategory ,
      {
        headers: this.headers,
      }
    );
  }

  createTerminalSignage(terminalSignage: TerminalSignage): Observable<TerminalSignage> {
    return this.http.post<TerminalSignage>(this.url + '/CreateTerminalSignage', terminalSignage ,
      {
        headers: this.headers,
      }
    );
  }

  deleteTerminalSignage(terminalSignage: TerminalSignage): Observable<TerminalSignage> {
    return this.http.post<TerminalSignage>(this.url + '/DeleteTerminalSignage', terminalSignage ,
      {
        headers: this.headers,
      }
    );
  }

  update(obj: Terminal): Observable<Terminal> {
    return this.http.post<Terminal>(
      this.url + '/Update',
      obj,
      {
        headers: this.headers,
      }
    );
  }

  remove(obj: Terminal): void {
    this.http
      .post(this.url + '/Delete', obj)
      .subscribe();
  }
}
