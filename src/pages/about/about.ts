import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from "../contact/contact";


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  items:any = [
    {name:"Milk", price:"$1.99"},
    {name:"Cheese", price:"$2.67"},
    {name:"Bread", price:"$2.50"},
    {name:"Beer", price:"$12.50"},
    {name:"Whiskey", price:"39.99"},
    {name:"Grapes", price:"4.99"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  toContact():void {
    this.navCtrl.push(ContactPage);

    //We would use this.navCtrl.setRoot(HomePage) for logging in
    //That sets the HomePage ad the root page after the user has logged in
  }

}