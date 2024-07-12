import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QRCodeModule } from 'angularx-qrcode';
import { LoginComponent } from './auth/component/login/login.component';
import { LayoutComponent } from './auth/component/layout/layout.component';
import { QRCodeComponent } from './auth/component/qrcode/qrcode.component';

QRCodeComponent



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,QRCodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }