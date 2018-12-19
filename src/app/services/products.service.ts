import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable()
export class ProductsService {
  private subject = new Subject();
  products: Product[] = [];
  constructor(private http: HttpClient) { }
    getProducts () {
      return this.http.get<{message: string, products: Product[]}>('http://localhost:3000/api/products').pipe(
        map((data) => {
          return data;
        })
      );
    }
    postProduct(data) {
      return this.http.post('http://localhost:3000/api/products', data);
    }
  // getProductDetials(id) {
  //   return this.http.post('http://localhost:3000/api/productdetail', {id: id}).pipe(
  //     map((data) => {
  //         return data;
  //     })
  //   );
  // }
    updateProduct(id: string, data) {
      return this.http.put(`http://localhost:3000/api/products/${id}`, data);
    }
    deleteProduct(id: string) {
      return this.http.delete('http://localhost:3000/api/products/' + id);
    }
}


export interface Product {
  id: string;
  title: string;
  content: string;
  cat: string;
  type: string;
}
