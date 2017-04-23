import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the YourPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  template: '<h2>Cat</h2> <button (click)="onBack()">Back</button>l'
})
export class Cat {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter(){
    console.log('ionViewDidEnter Cat');
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad Cat');
  }

  onBack(){
    this.navCtrl.pop();
  }

}
