import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './pages/users/users.component';
import { CardComponent } from './components/card/card.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactComponent,
    UserFormComponent,
    UsersComponent,
    BlogsComponent,
    CardComponent,
    PostsComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
