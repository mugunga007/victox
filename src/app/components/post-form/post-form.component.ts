import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

@Output() newPost: EventEmitter<Post> = new EventEmitter();
@Input() currentPost:Post;
@Input() isEdit: boolean;
@Output() editedPost: EventEmitter<Post> = new EventEmitter();

  constructor(
    private postService : PostService
  ) { }

  ngOnInit() {
  }

  addPost(title:string, body:string){
    if(!title && !body)
    alert("Please.....");
    else{
  console.log(title, body);
  this.postService.savePost({title, body} as Post).subscribe(post =>
   {
     console.log(post);
     this.newPost.emit(post);
      
   }
    )

    }

  }

  updatePost(id:any, title:string, body:string){
    this.postService.updatePost({id,title,body} as Post).subscribe(post =>{
      this.editedPost.emit(post);
      this.isEdit = false;
    })
  } 
}
