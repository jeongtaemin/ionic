import { Component, NgZone } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Transfer} from 'ionic-native';
import {Plugins} from '../../services/plugins.service';
import { PhotoPage } from '../photo/photo';


@Component({
  selector: 'page-uploading',
  templateUrl: 'uploading.html'
})
export class UploadingPage {
    
    images: Array<string>
    
    uploading: boolean = true;
    current: number = 1;
    total: number;
    progress: number;
    
    constructor(
                public alertCtrl: AlertController,
                private nav: NavController, 
                private navParams: NavParams,
                private plugins: Plugins,
                private ngZone: NgZone) {  
                    
        this.images = this.navParams.get("images");        
        if(!this.images || this.images.length == 0) {
            let alert = this.alertCtrl.create({
                title: "Error",
                subTitle: "No images found to upload",
                buttons: ['Ok']
            });
            alert.present();
            return;
        }      
        
        this.total = this.images.length;   
        this.upload(this.images[0]);       
    }
    
    done = () : void => {
        this.nav.setRoot(PhotoPage);    
    }
    
    success = (result: any) : void => { 
        if(this.current < this.total) {             
            this.current++;
            this.progress = 0;                    
            this.upload(this.images[this.current - 1]);
        } else {   
            this.uploading = false;
        }
    }
            
    failed = (err: any) : void => {
        let code = err.code;
        alert("Failed to upload image. Code: " + code);
    }
    
    onProgress =  (progressEvent: ProgressEvent) : void => {
        this.ngZone.run(() => {
            if (progressEvent.lengthComputable) {
                let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(progress);
                this.progress = progress      
            }
        });
    }
    
    upload = (image: string) : void => { 
        let ft = new Transfer();
        let d = new Date();
        let n = d.getTime();
        let filename = n + ".jpg";
        var url = "http://checkmate99.dothome.co.kr/app/file_upload.php";
        let options = {
            fileKey: 'file',
            fileName: filename,
            mimeType: 'image/jpeg',
            chunkedMode: false,
            headers: {
                'Content-Type' : undefined
            },
            params: {
                fileName: filename
            }
        }; 
        ft.onProgress(this.onProgress);
        ft.upload(image, url, options, false)
        .then((result: any) => {
            this.success(result);
        }).catch((error: any) => {
            this.failed(error);
        }); 
    }
}