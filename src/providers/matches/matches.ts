import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'/match';
let battingapiUrl = ENV.baseUrl+'/batting';
let bowlingapiUrl = ENV.baseUrl+'/Bowling';
//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class MatchService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllMatches() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/matches/availabilities', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getAllMatchesFilter(filter) {
    return new Promise((resolve, reject) => {
      
      let headers = new Headers();

    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());

    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!=null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiUrl + '/matches/availabilities?'+urlSearchParams, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  

getBestBatting() {
    return new Promise((resolve, reject) => {
 
      this.http.get(battingapiUrl + '/top')
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
  getBestBowling() {
    return new Promise((resolve, reject) => {
 
      this.http.get(bowlingapiUrl + '/top')
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getPreviousMatches() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/playedmatches', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getMatches(team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/matches/'+team.id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  getMatchesFilter(team,filter) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!=null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiUrl + '/matches/'+team.id+'?'+urlSearchParams, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getPreviousMatchesFilter(filter) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
    urlSearchParams.append(key, filter[key]);
  }
      this.http.get(apiUrl + '/playedmatches?'+urlSearchParams, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getMatchSummary(matchid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/matchsummary/' + matchid, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
  getMatchAvailability(matchid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/availability/' + matchid, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
  matchReminder(matchid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/availability/reminder/' + matchid, null,{headers: headers})
        .subscribe(res => {
          resolve(res.json());
         

        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  postAvailability(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/availability', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast avail post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
  updateAvailability(match,player,status) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
	console.log("request",JSON.stringify(status));
      this.http.post(apiUrl + '/'+match+'/availability/'+player.id, status, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast avail post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
 addMatch(data,team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
	console.log("requeset", JSON.stringify(data)); 
      this.http.post(apiUrl + '/match/'+team.id, JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  createMatchTeam(matchId,data) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());	
	console.log("requeset", JSON.stringify(data.player.id)); 
      this.http.post(apiUrl + '/team/'+matchId,data.player.id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getMatchTeam(matchid) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/team/' + matchid, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response players", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("players", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  deleteMatchTeam(matchId,data) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());	
	this.http.delete(apiUrl + '/team/'+matchId+'/player/'+data.id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  sendTeamList(matchId) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());		
      this.http.post(apiUrl + '/team/send/'+matchId,null,{headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  

  delete(matchId) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());	
	this.http.delete(apiUrl + '/match/'+matchId, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
}