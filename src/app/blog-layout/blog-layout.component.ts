import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit {

blogs: Array<Blog> =[];

addBlog(blogname,blogcomment)
{
  const blog = new Blog(blogname.value,blogcomment.value)
  //blogname.value + ' ' + blogcomment.value;
  this.blogs.push(blog);
  blogname.value='';
  blogcomment.value='';
  //console.log(blog);
}
  constructor() { }

  ngOnInit() {
  }

}
