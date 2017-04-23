import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the YourPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-your-page',
  templateUrl: 'your-page.html'
})
export class YourPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  onBack(){
	this.navCtrl.pop();
}

	
  ionViewDidLoad() {
    console.log('ionViewDidLoad YourPagePage');
  }

}
