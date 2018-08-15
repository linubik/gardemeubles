import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MathsPage } from '../pages/maths/maths';
import { NotesPage } from '../pages/notes/notes';
import { FranAisPage } from '../pages/fran-ais/fran-ais';
import { FranAisSuitePage } from '../pages/fran-ais-suite/fran-ais-suite';
import { FranAisPrNomsPage } from '../pages/fran-ais-pr-noms/fran-ais-pr-noms';
import { GOgraphiePage } from '../pages/g-ographie/g-ographie';
import { HistoirePage } from '../pages/histoire/histoire';
import { HistoireSuitePage } from '../pages/histoire-suite/histoire-suite';
import { SVTPage } from '../pages/s-vt/s-vt';
import { ArtsPage } from '../pages/arts/arts';


import { AccueilPage } from '../pages/accueil/accueil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  //BTH    rootPage:any = AccueilPage;
  rootPage:any = AccueilPage;
  //BTH

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMaths(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MathsPage);
  }goToNotes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NotesPage);
  }goToFranAis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FranAisPage);
  }goToFranAisSuite(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FranAisSuitePage);
  }goToFranAisPrNoms(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FranAisPrNomsPage);
  }goToGOgraphie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GOgraphiePage);
  }goToHistoire(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoirePage);
  }goToHistoireSuite(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoireSuitePage);
  }goToSVT(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SVTPage);
  }goToArts(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ArtsPage);
  }
}
