import { Product } from '../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (search.length === 0) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) 
  }
}
