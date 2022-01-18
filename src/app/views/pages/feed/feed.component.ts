import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../services/post.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts = [ ];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  saveComment(){
    alert("Comentário esta sendo salvo!");
  }
}
