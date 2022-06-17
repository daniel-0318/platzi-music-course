import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  loginUser(Credential){
    return new Promise((accept, reject)=>{
      if(Credential.email=="test@test.com" && Credential.password == "12345"){
        accept("Login correcto");
      }else{
        reject("Login incorrecto");
      }
    });
  }

  registerUser(userData){
    userData.password = btoa(userData.password);
    userData.passwordConfirm = btoa(userData.passwordConfirm);
    return this.storage.set("user", userData);
  }

}
