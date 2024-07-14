import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
  {
    path:'header',
    component: HeaderComponent
  },
  // for child routing 
  {
    path:'home',
    component:HomeComponent,
    children:[
      {path:'company', component:AboutCompanyComponent}
    ]
  },
  {
    path:'user',
    component:UserComponent
  },
  // for passing data in dynamic routing 
  {
    path:'user/:id',
    component:UserComponent
  },
  // for 404 page not found 
  {
    path:'**',
    component: NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
