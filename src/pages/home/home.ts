import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingInPage } from '../sing-in/sing-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  onGoToSingIn() {
    this.navCtrl.push(SingInPage);
  }

}