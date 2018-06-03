import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {OtherService} from '../../providers/other/other';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-tournament',
  templateUrl: 'create-tournament.html',
})
export class CreateTournamentPage {

  private createTournamentForm: FormGroup;

  name : any;
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: OtherService) {
   this.createTournamentForm = formBuilder.group({
     
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	      
  });

  this.name=this.createTournamentForm.controls['name'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createTournament(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.createTournament(this.createTournamentForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
    
     
      }  else if(this.responseData.statusCode == "404") {
		   loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
  console.log("test others");
      }
      
    }, (err) => {
		console.log("error",err);
		 loading.dismiss();
      // Error log
    });
  }

}
