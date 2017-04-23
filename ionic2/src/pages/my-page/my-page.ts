import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
	template: '<h2>this is my page</h2> <button (click)="onBack()"></button>'
})

export class MyPage {
	constructor(private navCtrl : NavController){

	}

	onBack(){
		this.navCtrl.pop();
	}
}