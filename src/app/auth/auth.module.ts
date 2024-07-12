import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { QRCodeComponent } from './component/qrcode/qrcode.component';
import { LayoutComponent } from './component/layout/layout.component';
import { QRCodeModule } from 'angularx-qrcode';



QRCodeModule

@NgModule({
  declarations: [
    LoginComponent,
    QRCodeComponent,
    LayoutComponent
  ],
  imports: [
    // CommonModule,
    // AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    QRCodeModule
    
  ]
})
export class AuthModule { }
