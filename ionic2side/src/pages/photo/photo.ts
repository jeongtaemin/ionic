import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { FileUploadOptions, Transfer, TransferObject } from '@ionic-native/transfer';
import {ImageService} from '../../services/image.service';


declare var cordova: any;
declare var window: any;

@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
  providers: [ImageService, Transfer]
})
export class PhotoPage {
  loading: Loading;
  base64Image: any;
  imagePath: any;
  imageNewPath:any;
  constructor(
    private transfer: Transfer,
    private imageService: ImageService,
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, 
    public platform: Platform, 
    public loadingCtrl: LoadingController) { }
   
   images: Array<string> = [];
   images2: Array<string> = [];


	presentActionSheet(){
	    let actionSheet = this.actionSheetCtrl.create({
	          title: 'Select Image Source',
	          buttons: [
	            {
	              text: 'Load from Library',
	              handler: () => {
	                //this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
	                this.imageService.albums.open().then((imgUrls) => {            
		            imgUrls.forEach((imageUrl: string) : void => {
		                if(imageUrl){                  
		                 	// imageUrl = 'data:image/jpeg;base64,'+imageUrl;         	 
		                 	this.images.push(imageUrl);
		                }
		            }); 
		        });      
	              }
	            },
	            {
	              text: 'Use Camera',
	              handler: () => {
	                this.imageService.camera.open().then((imagePath) => { 
	                	this.base64Image = 'data:image/jpeg;base64,'+imagePath;               	
		   });
	              }
	            },
	            {
	              text: 'Cancel',
	              role: 'cancel'
	            }
	          ]
	    });
	    actionSheet.present();
	  }

	 uploadProfileImage(){
	 	const fileTransfer: TransferObject = this.transfer.create();
                	let options1: FileUploadOptions = {
		         fileKey: 'file',
		         fileName: 'name.jpg',
		         headers: {}
		 }
		 var url = "http://checkmate99.dothome.co.kr/app/file_upload.php";
		 fileTransfer.upload(this.base64Image, url, options1)
		   .then((data) => {
		     // success
		     alert("success");
		   }, (err) => {
		     // error
		     alert("error"+JSON.stringify(err));
		   });
	 }


	
}
