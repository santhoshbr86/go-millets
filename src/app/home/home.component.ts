import { Component, OnInit } from '@angular/core';
import { PostsService, Product } from '../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Product[] = [];
  imgSize = {};
  constructor(private postService: PostsService) {
   }

  ngOnInit() {
    this.imgSize = { width: '1400', height: '500'};
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data.products;
    });
  }

}
