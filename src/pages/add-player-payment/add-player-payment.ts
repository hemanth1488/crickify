import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {FinanceProvider} from '../../providers/finance/finance';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the AddPlayerExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-player-payment',
  templateUrl: 'add-player-payment.html',
})
export class AddPlayerPaymentPage {

  url="https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=a7a4413a-661a-4083-8585-41e3a9ce278a&redirect_uri=https://crickifyapp.herokuapp.com/&scope=Read&response_type=code&state=0399";
  playerExpense: any;
  responseData: any;
  deleteresponseData: any;
  playerresponseData: any;
  addresponseData: any;
private addPaymentForm: FormGroup;
playerExpenses:any;
  players:any=[];
  tabsvalues: any = "summary";
team:any;

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams, public financeService: FinanceProvider,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
   this.addPaymentForm = formBuilder.group({
    playerExpense: ['', Validators.compose([Validators.required])],
    createDate: [''],
    id: [''],
    token: [''],
    modifyDate: ['']
});


  this.playerExpense = navParams.get('playerExpense');
  this.addPaymentForm.controls['playerExpense'].setValue(this.playerExpense);



}

addPayment(value){

  this.financeService.addPayment(value).then((result) => {
    this.responseData = result;
    console.log(this.responseData); 
    if (this.responseData.statusCode == '200'){

   this.alertDialog("Payment Status",this.responseData.result.status)
    }else {

    }
    
  }, (err) => {

  });
}


addPlayerExpense(){
  let browserRef = this.iab.create(this.url, '_blank');
  browserRef.on("loadstart").subscribe((event:any) => {
 
    if ((event.url).indexOf('?code=') !== -1) {
      let token = event.url.slice(event.url.indexOf('?code=') + '?code='.length);
      this.addPaymentForm.controls['token'].setValue(token);
      this.addPayment(this.addPaymentForm.value);
      browserRef.close();


    }

  });


  
}
 

 alertDialog(title,message){

let alert = this.alertController.create({
        title: title,
        subTitle: message,
        buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('ok clicked');
           
          }
        }
      ]
      });
      alert.present();
}

}