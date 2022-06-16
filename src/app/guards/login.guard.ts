import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 
  constructor(private storage: Storage, private router: Router){
    this.storage.create()
  }

  async canActivate() {
    const isIntroShowed = await this.storage.get('isIntroShowed');
    if (isIntroShowed) {
      return true
    }else{
      this.router.navigateByUrl("/intro")
    }
      
  }
  
}
