import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})
export class NewPlacePage {
  place;
  places = [];
  constructor( private navCtrl: NavController,public storage:Storage) {
    if(!this.places){
      this.places = [];
    }
    this.place = ""
  }

  ionViewWillEnter(){
    this.storage.get('places').then((place)=>{this.places = place})
  }

  save(value:{title:any,description:any}) {
    this.place = value;
    this.places.push(this.place)
    this.storage.set('places',this.places);
    this.navCtrl.pop();
  }

}
