import {Injectable} from "@angular/core";
import {Camera, ImagePicker} from 'ionic-native';


@Injectable()
export class ImageService {
    
    constructor() { }     
    
    albums = {            
        open () : Promise<any>  { 

            return ImagePicker.getPictures({
                    quality: 100,                        
                    maximumImagesCount: 3,
                    outputType: 1
            }).then((imgUrls) => {
                return imgUrls;
            }, (err) => {                                   
                if(err.error == "cordova_not_available") {               
                    alert("Cordova is not available, please make sure you have your app deployed on a simulator or device");                                   
                } else {                
                    alert("Failed to open albums: " + err.error);
                }
            });

        } 
    }
    
    camera = {       
        open () : Promise<any>  {
            let options = {
                // destinationType: Camera.DestinationType.FILE_URI,
                 destinationType : Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                quality:100,
                allowEdit: false,
                saveToPhotoAlbum: false,            
                correctOrientation: true,
            };        
            return Camera.getPicture(options).then((imgUrl) => {
                return imgUrl;
            }, (err) => {                
                if(err.error == "cordova_not_available") {
                    alert("Cordova is not available, please make sure you have your app deployed on a simulator or device");            
                } else {
                    alert("Failed to open camera: " + err.error);                
                }    
            });
        } 
    }

}