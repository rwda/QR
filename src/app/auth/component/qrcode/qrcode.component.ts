import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ViewChild, ElementRef } from '@angular/core';
// import { SharedService } from 'src/app/shared/shared.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})



export class QRCodeComponent implements OnInit  {

  // @ViewChild('qrcodeElement') qrcodeElement!: ElementRef ;


  // nativeElement: any;
  // downloadQRCode() {
    
  //   const qrCodeImage = this.qrcodeElement;
    // const qrcodeElement = this.qrcodeElement.nativeElement;
    // const link = document.createElement('a');
    // link.href = qrCodeImage.src;
    // link.download = 'qrcode.png';
    // link.click();
  //   console.log(qrCodeImage)
  // } 
  public Qrcode:string="";
  newqr:string="";

//   constructor(private shared:SharedService){}
  ngOnInit(): void {}


//     this.shared.getnewqr().subscribe((value: string) => {
//   this.newqr = value;
//  })
 



  // qrCodeLink: string = 'https://github.com/Cordobo/angularx-qrcode';
  public qrCodeDownloadLink: SafeUrl = "";
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  

  }
  



 
  }
