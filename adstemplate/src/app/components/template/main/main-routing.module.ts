import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: '../../pages/home/home.module#HomeModule'
      },
      {
        path: 'ads',
        loadChildren: '../../pages/listing/listing.module#ListingModule'
      },
      {
        path: 'login',
        loadChildren: '../../pages/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: '../../pages/register/register.module#RegisterModule'
      },
      {
        path: 'blog',
        loadChildren: '../../pages/blog/blog.module#BlogModule'
      },
      {
        path: 'contact',
        loadChildren: '../../pages/contact/contact.module#ContactModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
