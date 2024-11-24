import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  private apiUrl = 'http://localhost:3000/api/numbers';

  constructor(private http: HttpClient) {}

  getNumbers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
