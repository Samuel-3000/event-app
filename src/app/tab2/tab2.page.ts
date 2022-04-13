import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { HttpClient, Headers, RequestOptions } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  

  constructor(public alertController: AlertController, httpClient: HttpClient) {}

  // ngOnInit(){}

  // sendPostRequest() {
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json' );
  //   const requestOptions = new RequestOptions({ headers: headers });

  //   let postData = {
  //           "name": "Customer004",
  //           "email": "customer004@email.com",
  //           "tel": "0000252525"
  //   }

  //   this.http.post("http://127.0.0.1:3000/customers", postData, requestOptions)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //      }, error => {
  //       console.log(error);
  //     });
  // }
  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hot Pepper',
      subHeader: '40g - 80g sale price',
      message: '5 days till harvest, 3 days regrowth',
      buttons: ['Cancel','Add to Plan'] 
    });
  
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  


  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Green Bean',
      subHeader: '40g - 80g sale price',
      message: '10 days till harvest, 3 days regrowth',
      buttons: ['Cancel','Add to Plan'] 
    });
  
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  


  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Starfruit',
      subHeader: '750g - 1500g sale price',
      message: '13 days till harvest',
      buttons: ['Cancel','Add to Plan'] 
    });
  
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  


  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tomato',
      subHeader: '60g - 120g sale price',
      message: '11 days till harvest, 4 days regrowth',
      buttons: ['Cancel','Add to Plan'] 
    });
  
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  


  }

  async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pumpkin',
      subHeader: '320g - 640g sale price',
      message: '13 days till harvest',
      buttons: ['Cancel','Add to Plan'] 
    });
  
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  


  }

  
}
