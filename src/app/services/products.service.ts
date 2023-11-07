import { Product } from 'src/app/models/product';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsAdded: Product[] = [];

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
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 10 }
      })
    }).pipe(
      delay(2000),
      retry(2),
      catchError(this.errorHandler.bind(this)),
    );
  }

  create(product: Product): Observable<Product> {
    console.log('Service create Product:', product);
    return this.http.post<Product>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.productsAdded.push(prod))
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
