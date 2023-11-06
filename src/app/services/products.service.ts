import { Product } from 'src/app/models/product';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getAll() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 5 }
      })
    }).pipe(
      delay(2000)
    );
  }

  get products() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products1', {
      params: new HttpParams({
        fromObject: { limit: 5 }
      })
    }).pipe(
      delay(2000),
      catchError(this.errorHandler.bind(this)),
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
