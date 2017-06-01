import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { Storage } from '@ionic/storage';
import {EditPage} from "../edit/edit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: any,description:any}[] = [];

  constructor(public storage:Storage,public navCtrl: NavController) {
  this.places = [
    {title:'a',description:'a'},
    {title:'b',description:'b'},
    {title:'c',description:'c'},
    {title:'d',description:'d'},
    {title:'e',description:'e'},
  ]

  }

// get(){
//   this.storage.get('places').then(places => this.places = places);
// }

  ionViewWillEnter() {
    // this.get()

  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  delete(place) {

    this.places.splice(place, 1);
    this.storage.set('places',this.places)
    }

  edit(value){
   let slice = this.places.slice(value,1);
    this.navCtrl.push(EditPage,slice)
  }
  console(){
    console.log(this.places.length)
  }


}
