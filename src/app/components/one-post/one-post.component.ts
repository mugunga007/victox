import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
post: Post ={
  id:0,
  title:'',
  body:''
};
  constructor(
    private postService:PostService,
    private route: ActivatedRoute,
   
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getOnePost(id).subscribe(post => {
      this.post = post
    })
    console.log(this.post);
  }



}
