import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  clickGoogle():void {
    alert('Google');
  }

  toAbout():void {
    this.navCtrl.push(AboutPage);

    //We would use this.navCtrl.setRoot(HomePage) for logging in
    //That sets the HomePage ad the root page after the user has logged in
  }

}
