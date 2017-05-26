import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewPlacePage} from "../pages/new-place/new-place";
import {PlacesService} from "../services/places.service";
import {IonicStorageModule} from "@ionic/storage";
import {EditPage} from "../pages/edit/edit";

@NgModule({
  declarations: [
    NewPlacePage,
    MyApp,
    HomePage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NewPlacePage,
    MyApp,
    HomePage,
    EditPage
  ],
  providers: [
    PlacesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
