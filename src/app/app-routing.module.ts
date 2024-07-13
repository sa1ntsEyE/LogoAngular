import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'blog' , component: HomeComponent},
  {path: 'kontakt' , component: HomeComponent},
  {path: 'onas' , component: HomeComponent},
  {path: 'treningi' , component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
