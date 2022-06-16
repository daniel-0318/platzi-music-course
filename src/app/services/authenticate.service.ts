import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(Credential){
    return new Promise((accept, reject)=>{
      if(Credential.email=="test@test.com" && Credential.password == "12345"){
        accept("Login correcto");
      }else{
        reject("Login incorrecto");
      }
    });
  }

}
