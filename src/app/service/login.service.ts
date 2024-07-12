import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Login } from '../auth/cotext/iner';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(model:Login){
    return this.http.post("https://qrcode-xlnv.onrender.com/auth/login",model)
  }
 
}
