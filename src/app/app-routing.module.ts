import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TheoryComponent } from './home/theory/theory.component';
import { AppComponent } from './app.component';
import { PlatformComponent } from './home/platform/platform.component';

const routes: Routes =[
  {path:'', component: AppComponent},
  {path:'theory', component: TheoryComponent},
  {path:'platform', component: PlatformComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
