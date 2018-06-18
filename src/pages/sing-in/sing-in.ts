import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPage } from '../display/display';

@Component({
  selector: 'page-sing-in',
  templateUrl: 'sing-in.html',
})
export class SingInPage {
  private myStyles: Object = {showUsername: false};

  constructor(public navCtrl: NavController) {
  }
  onGoToDisplay(){
    this.navCtrl.push(DisplayPage);
  }

}