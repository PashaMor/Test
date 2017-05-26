import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../services/places.service";
import { Storage } from '@ionic/storage';
import {EditPage} from "../edit/edit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public storage:Storage,public navCtrl: NavController, private placesService: PlacesService) {

  }

  ionViewWillEnter() {
    return this.places ? Promise.resolve(this.places) : this.storage.get('places');
  }
  check(){
    console.log(this.places)
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  delete(value){
    this.places.splice(value,1);
    this.placesService.removePlace(value)
  }
  edit(value){
   let slice = this.places.slice(value,1);
    this.navCtrl.push(EditPage,slice)
  }
}
