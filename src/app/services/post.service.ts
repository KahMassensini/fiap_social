import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: any = [];

  constructor() { }

  getPosts(){
    return this.posts;
  }
}
