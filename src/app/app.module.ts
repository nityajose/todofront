import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewalltodoComponent } from './viewalltodo/viewalltodo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const myroutes=[
  {path:"",component:AddtodoComponent},
  {path:"view",component:ViewalltodoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    NavbarComponent,
    ViewalltodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
