import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) {
    this.storage.create();
  }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.storage.remove('isUserLoggedIn');
    this.navCtrl.navigateRoot("/login");
  }

  gotoSettings(){
    this.navCtrl.navigateRoot("/menu/settings");
    this.menu.close();
  }

  gotoSports(){
    this.navCtrl.navigateRoot("/menu/sports");
    this.menu.close();
  }

  gotoHome(){
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }
 

}
