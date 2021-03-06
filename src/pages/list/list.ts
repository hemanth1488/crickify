import { Component } from '@angular/core';
import { NavController, NavParams, App,LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import { StatsService } from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  userDetails : any;
  responseData: any;
  tabsvalues : String = "team";
  selectedTeam: any;

  teams : any;
  statsArray: any;
  allStats: any;

  //selectedTeam : any;


 
  userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public teamService:TeamService, public statsService:StatsService, public app: App, public loadingController:LoadingController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    } else {
      const root = this.app.getRootNav();
      root.popToRoot();
    }
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
  
    this.teamService.getAllTeams().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.teams = this.responseData.results.teams;
        this.selectedTeam = this.responseData.results.teams[0];
        this.teamSelected(this.responseData.results.teams[0]);
        console.log("result teams", JSON.stringify(this.responseData.results));
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      //  this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });
  }

  

  teamSelected(team){
    console.log("selected team", team);
    console.log("team id", team.id);
    this.getStats(team);
  }

  changeMenus(index:number)
  {
      this.selectedTeam=index;
  }

  getStats(team){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.statsArray = [];
    this.statsService.getTeamStats(team.id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("stats test 200");
        if(this.responseData.results.stats.length == 0){

        } else {
          this.statsArray = this.responseData.results.stats;
          console.log("result", this.responseData.results.stats);
         // console.log("arrary", JSON.parse(this.statsArray));
        }
        
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");

      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });
  }


}
