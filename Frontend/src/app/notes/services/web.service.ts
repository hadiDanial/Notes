import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  ROOT_URL = "http://localhost:8084/"
  constructor(private httpClient: HttpClient) { }
  config = { headers: WebService.httpHeaders };
  static httpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Accept': 'application/json'
  });



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