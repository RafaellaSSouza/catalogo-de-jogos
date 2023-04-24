import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../Games';

import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseApiUrl = 'http://localhost:3333/'
  private apiUrl = `${this.baseApiUrl}api/games`

  constructor(private http: HttpClient) {}
  
  getGames(): Observable<Response<Game[]>> {
    return this.http.get<Response<Game[]>>(this.apiUrl)
  }

  getGame(id: number): Observable<Response<Game>> {
    const url =`${this.apiUrl}/${id}}`;
    return this.http.get<Response<Game>>(url);
  }

  createGame(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  removeGame(id: Number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
