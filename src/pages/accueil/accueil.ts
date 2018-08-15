import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  constructor(public navCtrl: NavController,
  	public auth: AuthService) {
  }

  loginWithGoogle() { 
    this.auth.signInWithGoogle()
    .catch((error) => console.log(error.message))
    .then(() => this.navCtrl.setRoot(NotesPage)); 
   
    /*
    this.auth.signInWithGoogle() 
    .then( 
    () => this.navCtrl.setRoot(HomePage), 
    (error) => console.log(error.message) 
    ); 
    */  
  }
}
