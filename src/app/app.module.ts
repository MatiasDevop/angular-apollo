import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TheoryComponent } from './home/theory/theory.component';
import { PlatformComponent } from './home/platform/platform.component';
import { TheoryPipe } from './pipes/theory.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TheoryComponent,
    PlatformComponent,
    TheoryPipe
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
