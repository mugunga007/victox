import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { AddressService} from './services/address.service'
import { ShopService } from './services/shop.service';
import {TodoService} from './services/todo.service';
import { PostService } from './services/post.service';
import { ShopComponent } from './components/shop/shop.component';
import { HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { TodoComponent } from './components/todo/todo.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomeComponent } from './components/home/home.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    ShopComponent,
    PostComponent,
    TodoComponent,
    PostFormComponent,
    TodoFormComponent,
    HomeComponent,
    OnePostComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AddressService, ShopService, PostService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
