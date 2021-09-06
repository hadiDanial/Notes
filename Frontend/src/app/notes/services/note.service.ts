import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService
{

  ROOT_URL = "http://localhost:8084/"
  constructor(private httpClient: HttpClient) { }
  config = { headers: NoteService.httpHeaders };
  static httpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Accept': 'application/json'
  });
  public getAllNotes(): Observable<Note[]>
  {
    let apiRoute = "/notes/getAllNotes";
    return this.httpClient.get<Note[]>(`${this.ROOT_URL + apiRoute}`).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse)
  {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }
}
class NumbineHttpParamsGenerator
{
  public static insertParams(map: Map<string, any>): HttpParams
  {
    const params = new HttpParams();
    if (map != null)
    {
      for (let [key, value] of map)
      {
        params.set(key, value);
      }
    }
    return params;
  }
}