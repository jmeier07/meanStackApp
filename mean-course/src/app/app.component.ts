import { Component } from '@angular/core';
import { Post } from './posts/post.model';
// Mongo username: svcacct, password - 02gURZxtb6QlXUz8

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  storedPosts: Post[] = [];

  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
