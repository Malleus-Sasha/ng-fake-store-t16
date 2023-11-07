import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-t16 t';
  
}
