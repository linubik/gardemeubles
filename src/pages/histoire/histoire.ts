import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoireSuitePage } from '../histoire-suite/histoire-suite';
import { NotesPage } from '../notes/notes';
import { FranAisPage } from '../fran-ais/fran-ais';
import { FranAisSuitePage } from '../fran-ais-suite/fran-ais-suite';
import { FranAisPrNomsPage } from '../fran-ais-pr-noms/fran-ais-pr-noms';
import { MathsPage } from '../maths/maths';
import { GOgraphiePage } from '../g-ographie/g-ographie';
//BTH import { HistoirePage } from '../histoire/histoire';
import { SVTPage } from '../s-vt/s-vt';
import { ArtsPage } from '../arts/arts';

@Component({
  selector: 'page-histoire',
  templateUrl: 'histoire.html'
})
export class HistoirePage {

  constructor(public navCtrl: NavController) {
  }
  goToHistoireSuite(params){
    if (!params) params = {};
    this.navCtrl.push(HistoireSuitePage);
  }goToNotes(params){
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
  }goToSVT(params){
    if (!params) params = {};
    this.navCtrl.push(SVTPage);
  }goToArts(params){
    if (!params) params = {};
    this.navCtrl.push(ArtsPage);
  }
}
