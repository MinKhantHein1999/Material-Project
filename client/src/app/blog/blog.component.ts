import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  newPost = false;
  loadingBload = false;

  constructor() {}

  newBlockForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBload = true;
    setTimeout(() => {
      this.loadingBload = false;
    }, 2000);
  }

  ngOnInit(): void {}
}
