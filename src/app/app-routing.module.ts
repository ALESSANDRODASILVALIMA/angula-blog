import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
  path:'', component: PagesComponent  
  },
  {
    path:'sobre', component: SobreComponent
  },
  {
    path:'content/:id', component: ContentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
