import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { AddressComponent } from './components/address/address.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'post',component: PostComponent},
  {path: 'address', component: AddressComponent},
  {path:'todo', component: TodoComponent},
  {path:'user', component:UserComponent},
  {path: 'post/:id', component: OnePostComponent},
  {path: '**', component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
