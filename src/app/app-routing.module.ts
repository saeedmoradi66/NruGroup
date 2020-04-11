import { DetailsComponent } from './news/details/details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path: 'home',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'about',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'contactus',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: ContactusComponent
      }
    ]
  },
  {
    path: 'news',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: NewsComponent
      }
    ]
  },
  {
    path: 'news/:id',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: NewsComponent
      }
    ]
  },
  {
    path: 'details/:id',
    component: MasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: DetailsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
