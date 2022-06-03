import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './Dashboard/pages/AuthorC/addauthor/addauthor.component';
import { AddcategoryComponent } from './Dashboard/pages/CategoryC/addcategory/addcategory.component';
import { AddpublisherComponent } from './Dashboard/pages/PublisherC/addpublisher/addpublisher.component';
import { RegisteradminComponent } from './Dashboard/pages/UserC/registeradmin/registeradmin.component';
import { AllAuthorsComponent } from './UserInterface/pages/all-authors/all-authors.component';
import { AllCategoriesComponent } from './UserInterface/pages/all-categories/all-categories.component';
import { AllPublishersComponent } from './UserInterface/pages/all-publishers/all-publishers.component';
import { HomeComponent } from './UserInterface/pages/User/home/home.component';
import { LoginComponent } from './UserInterface/pages/User/login/login.component';
import { RegisterComponent } from './UserInterface/pages/User/register/register.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"category",component:AllCategoriesComponent},
  {path:"publisher",component:AllPublishersComponent},
  {path:"author",component:AllAuthorsComponent},
  {path:"registeradmin",component:RegisteradminComponent},
  {path:"admin/category/add",component:AddcategoryComponent},
  {path:"admin/author/add",component:AddauthorComponent},
  {path:"admin/publisher/add",component:AddpublisherComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
