import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'fake store';
  loading = false;
  term = '';
  products$!: Observable<Product[]>;
  // products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    // this.productsService.getAll().subscribe(products => {
    //   console.log('HTTP PRODUCTS', products);
    //   this.products = products;
    //   this.loading = false;
    // });
    this.products$ = this.productsService.products;
  }
}
