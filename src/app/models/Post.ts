export class Post{
  userId?: number;
  id?: number;
  title:string;
  body: string;
  shown?: boolean = false;
  constructor(
    title:string, body:string
  ){
 
  this.title = title;
  this.body = body;

  }

}