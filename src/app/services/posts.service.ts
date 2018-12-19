import { Injectable } from '@angular/core';
import { HomeModule } from '../home/home.module';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class PostsService {
  subject = new Subject<Product[]>();
  constructor(private http: HttpClient) { }
  getPosts() {
     // http://localhost:3000/api/posts
    return this.http.get<{message: string, products: Product[]}>('/assets/resources/products-details.json').pipe(
      map((data) => {
        return data;
      })
    );
  }
}

export interface Product {
  id: string;
  title: string;
  content: string;
}
