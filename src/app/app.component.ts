import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from './post';
import { NEVER, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesgeddit';
  readonly ROOT_URL='https://jsonplaceholder.typicode.com/posts'
  posts!:Observable<Post[]>;
  newPost!:Observable<any>;
  constructor(private http:HttpClient){}
  
  getPosts(){
    let params=new HttpParams().set('userId','5');
    this.posts=this.http.get<Post[]>(this.ROOT_URL,{params})
    
  }
  createPost(){
    const data:Post={
      id:22,
      userId:23,
      title:'Jhope the best',
      body:'lalala'
    }
    this.newPost= this.http.post<Post>(this.ROOT_URL,data)
    // this.newPost= this.http.post<Post>(this.ROOT_URL,data).pipe(map((response: any) => response.title));


  }
  
}
