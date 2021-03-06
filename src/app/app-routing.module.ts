import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TheoryComponent } from './home/theory/theory.component';
import { AppComponent } from './app.component';
import { PlatformComponent } from './home/platform/platform.component';

const routes: Routes =[
  {path:'', redirectTo:'/theory', pathMatch: 'full'},
  {path:'theory', component: TheoryComponent},
  {path:'platform', component: PlatformComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
