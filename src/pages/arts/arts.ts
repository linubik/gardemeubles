import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { FranAisPage } from '../fran-ais/fran-ais';
import { FranAisSuitePage } from '../fran-ais-suite/fran-ais-suite';
import { FranAisPrNomsPage } from '../fran-ais-pr-noms/fran-ais-pr-noms';
import { MathsPage } from '../maths/maths';
import { GOgraphiePage } from '../g-ographie/g-ographie';
import { HistoirePage } from '../histoire/histoire';
import { HistoireSuitePage } from '../histoire-suite/histoire-suite';
import { SVTPage } from '../s-vt/s-vt';
//BTH import { ArtsPage } from '../arts/arts';

@Component({
  selector: 'page-arts',
  templateUrl: 'arts.html'
})
export class ArtsPage {

  constructor(public navCtrl: NavController) {
  }
  goToNotes(params){
    if (!params) params = {};
    this.navCtrl.push(NotesPage);
  }goToFranAis(params){
    if (!params) params = {};
    this.navCtrl.push(FranAisPage);
  }goToFranAisSuite(params){
    if (!params) params = {};
    this.navCtrl.push(FranAisSuitePage);
  }goToFranAisPrNoms(params){
    if (!params) params = {};
    this.navCtrl.push(FranAisPrNomsPage);
  }goToMaths(params){
    if (!params) params = {};
    this.navCtrl.push(MathsPage);
  }goToGOgraphie(params){
    if (!params) params = {};
    this.navCtrl.push(GOgraphiePage);
  }goToHistoire(params){
    if (!params) params = {};
    this.navCtrl.push(HistoirePage);
  }goToHistoireSuite(params){
    if (!params) params = {};
    this.navCtrl.push(HistoireSuitePage);
  }goToSVT(params){
    if (!params) params = {};
    this.navCtrl.push(SVTPage);
  }goToArts(params){
    if (!params) params = {};
    this.navCtrl.push(ArtsPage);
  }
}
