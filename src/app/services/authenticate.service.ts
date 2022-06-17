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

  async loginUser(Credential){
    const user = await this.storage.get("user");
    return new Promise((accept, reject)=>{
      if(Credential.email== user.email&& 
      btoa(Credential.password) == user.password){
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
