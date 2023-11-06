import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-t16 t';
  loading = false;
  products$!: Observable<Product[]>;
  // products: Product[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    // this.productsService.getAll().subscribe(products => {
    //   console.log('HTTP PRODUCTS', products);
    //   this.products = products;
    //   this.loading = false;
    // });
    this.products$ = this.productsService.products;
  }
}
