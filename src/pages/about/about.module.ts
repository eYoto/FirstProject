import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { ContactPage } from "../contact/contact";

@NgModule({
  declarations: [
    AboutPage,
      ContactPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {}
