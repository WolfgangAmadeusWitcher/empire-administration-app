import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrintTemplate } from '../models/print-template';

@Injectable({
  providedIn: 'root'
})
export class PrintTemplateService {
  public url = 'https://localhost:5003/PrintTemplate';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  sendTemplate(obj: PrintTemplate): Observable<PrintTemplate> {
    return this.http.post<PrintTemplate>(
      this.url + '/SendPrintTemplate',
      obj,
      {
        headers: this.headers,
      }
    );
  }
}
