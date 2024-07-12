import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

Input
// import { SharedService } from 'src/app/shared/shared.service';


Router
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})


export class LayoutComponent implements OnInit {
  public qrcode:string="";
//   @Input()newqr:string="";

//   constructor(private shared:SharedService){}
 ngOnInit(): void {
  // this.newqr=this.shared.getnewqr()

   
 }
//  send(foem:NgForm){
// this.shared.setnewqr(this.Qrcode)
 }
//  onButtonClick(){
//   this.newqr=this.Qrcode
// }
  
  
