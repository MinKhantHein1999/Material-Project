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
  blogPost;

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
    public authService: AuthService,
    public blogService: BlogService
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
      this.getallBlogs();
      window.location.reload();
    });
  }

  getallBlogs() {
    this.blogService.getAllBlogs().subscribe((data) => {
      // console.log(data);
      this.blogPost = data.blogs;
    });
  }

  ngOnInit() {
    // this.authService.getProfile().subscribe((profile) => {
    //   console.log(profile);
    // this.username = profile.user.username;
    // });
    this.getallBlogs();
  }

  // blog = {
  //   title : this.formBlog.get('title').value,
  //   body : this.formBlog.get('body').value,
  //   createdBy : this.username
  // }
}
