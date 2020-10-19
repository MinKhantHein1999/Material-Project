import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  newPost = false;
  loadingBload = false;
  username: any;

  formBlog = new FormGroup({
    title: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.maxLength(50)])
    ),
    body: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
      ])
    ),
  });

  constructor(
    private authService: AuthService,
    private blogService: BlogService
  ) {}

  newBlockForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBload = true;
    setTimeout(() => {
      this.loadingBload = false;
    }, 2000);
  }

  goBack() {
    window.location.reload();
  }

  draftComment() {}

  onBlogSubmit() {
    // console.log('Form Submitted');
    const blog = {
      title: this.formBlog.get('title').value,
      body: this.formBlog.get('body').value,
      createdBy: this.username,
    };
    this.blogService.newBlog(blog).subscribe((data) => {
      console.log('Blog saved');
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe((data) => {
      this.username = data.user.username;
    });
  }
  // blog = {
  //   title : this.formBlog.get('title').value,
  //   body : this.formBlog.get('body').value,
  //   createdBy : this.username
  // }
}
