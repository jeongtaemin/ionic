import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { MyPage } from '../my-page/my-page';
import { YourPagePage } from '../your-page/your-page';
import { Cat } from '../cat/cat';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	y:number = 0;
	@ViewChild( Content ) content: Content;
  constructor(public navCtrl : NavController){

  }

 onClick(){
 	this.navCtrl.push(MyPage);
 }

 onClick22(){
 	this.navCtrl.push(YourPagePage);
 }

 onClick33(){
 	this.navCtrl.push(Cat);
 }

 onClick44(){
 	this.content.scrollTo(0, this.y+=80, 100);
 }

}
