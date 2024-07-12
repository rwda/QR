import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { QRCodeComponent } from './auth/component/qrcode/qrcode.component';
import { LayoutComponent } from './auth/component/layout/layout.component';


const routes: Routes = [
  {
    path: '', redirectTo:'login' , pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
       path:'qrcode', 
    component:QRCodeComponent
     },
     {
      path:'layout', 
   component:LayoutComponent
    },
    
    ]
  
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }














//    {path:'', 
//   loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
// },
//   {path:'login', 
//   loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
//   },