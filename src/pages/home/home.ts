import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../services/places.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public storage:Storage,public navCtrl: NavController, private placesService: PlacesService) {

  }

  ionViewWillEnter() {
    this.storage.get('places')
      .then(
        (places) => {
          this.places = places == null ? [] : places;
          return this.places;
        }
      )
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  delete(value){
    this.places.splice(value,1);
    this.placesService.removePlace(value)
  }
}
