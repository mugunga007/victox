import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:Post[];
currentPost : Post={
  id:0,
  title:'',
  body:''
};
isEdit:boolean = false;
post:Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(postlist =>
     this.posts = postlist );
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
   
  }
  editPost(post: Post){
    this.currentPost = post;
    this.isEdit = true;
    // console.log(this.currentPost);

  }

  onEditedPost(post:Post){
    this.posts.forEach((cur, index) =>{
      if(post.id === cur.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost ={
          id:0,
          title:'',
          body:''
        };
      }
    })
   
  }

  // deletePost(post:Post){
  //   if(confirm('Are you sure?')){
  //   return this.posts.forEach((cur, index)=>{
  //   if(post.id === cur.id){
  //     this.posts.splice(index, 1);
  //   }

  //   })
  // }
  // }

  deletePost(post:Post){
    if(confirm('Are you sure?')){
      this.postService.removePost(post).subscribe(()=>
      this.posts.forEach((cur, index)=>{
        if(post.id === cur.id){
          this.posts.splice(index, 1);
        }
    
        })
      )
    }
  }
// ---- Getting Post using search loop in the array
  // showPost(id:number):Post{
  //   this.posts.forEach((cur, index)=>{
  //     if(cur.id === id){
  //       this.post = cur;
  //     }

  //   });
  //   console.log(this.post);
  //   return this.post;
  // }

  // ---- Getting Post using http request

 

}
