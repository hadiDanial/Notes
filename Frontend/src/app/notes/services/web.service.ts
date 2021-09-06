import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  [x: string]: any;


  readonly ROOT_URL = "http://localhost:8084/";

  config = {
    headers: WebService.httpHeaders,
    options: null
  };

  static httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json'
  });
  constructor(private httpClient: HttpClient) {
  }


  public post<T>(apiRoute: string, data: Map<string, any>): Observable<T> {
    let params = HttpParamsGenerator.insertParams(data);
    let options = { params: params };
    // return this.httpClient.post<T>(`${this.ROOT_URL + apiRoute}`,JSON.stringify(params),this.config).pipe(catchError(this.handleError));
    return this.postBool<T>(apiRoute, data, false);
  }
  public postBool<T>(apiRoute: string, data: Map<string, any>, bool: boolean): Observable<T> {
    let params = HttpParamsGenerator.insertParams(data);
    let options = { params: params };
    if (bool == true) {
      return this.httpClient.post<T>(`${this.ROOT_URL + apiRoute}` + "?" + params.toString(), {}).pipe(catchError(this.handleError));
    }
    return this.httpClient.post<T>(`${this.ROOT_URL + apiRoute}`, JSON.stringify(params), this.config).pipe(catchError(this.handleError));
  }
  public postJSON<T>(apiRoute: string, data: string): Observable<T> {
    return this.httpClient.post<T>(`${this.ROOT_URL + apiRoute}`, data, this.config).pipe(catchError(this.handleError));
  }

  public get<T>(apiRoute: string, data: Map<string, any>): Observable<T> {
    let params = HttpParamsGenerator.insertParams(data);
    let options = { params: params };
    return this.httpClient.get<T>(`${this.ROOT_URL + apiRoute}`, options).pipe(catchError(this.handleError));
  }



  public put<T>(apiRoute: string, data: Map<string, any>): Observable<T> {
    let params = HttpParamsGenerator.insertParams(data);
    return this.httpClient.put<T>(`${this.ROOT_URL + apiRoute}`, params).pipe(catchError(this.handleError));
  }

  public delete<T>(apiRoute: string, data: Map<string, any>): Observable<T> {
    let params = HttpParamsGenerator.insertParams(data);
    let options = { params: params };

    return this.httpClient.delete<T>(`${this.ROOT_URL + apiRoute}`, options).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }

}
class HttpParamsGenerator
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