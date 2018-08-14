import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goToBtns: string = "CardsBadgesPage";
  goToLsts: string = "ListsPage";
  goToInpts: string = "InputRadiosPage";
  constructor(public navCtrl: NavController) {

  }

}
