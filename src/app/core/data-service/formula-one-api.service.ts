import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from './errors/app-error';
import {
  BackendOffline,
  BadRequest,
  Forbidden,
  InternalServerError,
  NotFoundError,
  Unauthorized,
} from './errors/index';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormulaOneApiService {
  constructor(private http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Cache-Control': 'no-store, no-cache',
      'X-RapidAPI-Key': environment.apiFormulaOne.xRapidAPIKey,
      'X-RapidAPI-Host': environment.apiFormulaOne.xRapidAPIHost,
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(response: HttpErrorResponse | any) {
    const applicationError = response.headers.get('Application-Error');

    if (applicationError) {
      return throwError(applicationError);
    }

    switch (response.status) {
      case 0:
        return throwError(new BackendOffline(response));
      case 400:
        return throwError(new BadRequest(response));
      case 401:
        return throwError(new Unauthorized(response));
      case 403:
        return throwError(new Forbidden(response));
      case 404:
        return throwError(new NotFoundError(response));
      case 500:
        return throwError(new InternalServerError(response));
      default:
        return throwError(new AppError(response));
    }
  }

  get(path: string, params: any = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.apiFormulaOne.url}${path}`, { headers: this.setHeaders(), params: params })
      .pipe(
        map((res: Object) => res),
        catchError((error: HttpErrorResponse) => this.formatErrors(error))
      );
  }
}
