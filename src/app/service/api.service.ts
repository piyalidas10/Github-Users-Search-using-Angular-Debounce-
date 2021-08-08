import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) { }

  getUsersByLocation(country): Observable<any> {
    return this.http.get<any>(this.apiURL + 'location:' + country)
    .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
