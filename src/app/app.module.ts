import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './Dashboard/shared/admin-navbar/admin-navbar.component';
import { AdminSidemenueComponent } from './Dashboard/shared/admin-sidemenue/admin-sidemenue.component';
import { CategoryComponent } from './Dashboard/pages/CategoryC/category-list/category.component';
import { PublisherComponent } from './Dashboard/pages/PublisherC/publisher-list/publisher.component';
import { AuthorComponent } from './Dashboard/pages/AuthorC/author-list/author.component';
import { BookComponent } from './Dashboard/pages/BookC/book-list/book.component';
import { UsersComponent } from './Dashboard/pages/UserC/users-list/users.component';
import { NavbarComponent } from './UserInterface/shared/navbar/navbar.component';
import { HomeComponent } from './UserInterface/pages/User/home/home.component';
import { LoginComponent } from './UserInterface/pages/User/login/login.component';
import { RegisterComponent } from './UserInterface/pages/User/register/register.component';
import { AllCategoriesComponent } from './UserInterface/pages/all-categories/all-categories.component';
import { AllPublishersComponent } from './UserInterface/pages/all-publishers/all-publishers.component';
import { AllAuthorsComponent } from './UserInterface/pages/all-authors/all-authors.component';
import { BookreviewsComponent } from './UserInterface/pages/BookComponents/bookreviews/bookreviews.component';
import { BookdetailsComponent } from './UserInterface/pages/BookComponents/bookdetails/bookdetails.component';
import { RegisteradminComponent } from './Dashboard/pages/UserC/registeradmin/registeradmin.component';
import { AddcategoryComponent } from './Dashboard/pages/CategoryC/addcategory/addcategory.component';
import { AddauthorComponent } from './Dashboard/pages/AuthorC/addauthor/addauthor.component';
import { AddpublisherComponent } from './Dashboard/pages/PublisherC/addpublisher/addpublisher.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminSidemenueComponent,
    CategoryComponent,
    PublisherComponent,
    AuthorComponent,
    BookComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AllCategoriesComponent,
    AllPublishersComponent,
    AllAuthorsComponent,
    BookreviewsComponent,
    BookdetailsComponent,
    RegisteradminComponent,
    AddcategoryComponent,
    AddauthorComponent,
    AddpublisherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
