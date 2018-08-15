import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { MathsPage } from '../pages/maths/maths';
import { FranAisPage } from '../pages/fran-ais/fran-ais';
import { FranAisSuitePage } from '../pages/fran-ais-suite/fran-ais-suite';
import { FranAisPrNomsPage } from '../pages/fran-ais-pr-noms/fran-ais-pr-noms';
import { GOgraphiePage } from '../pages/g-ographie/g-ographie';
import { SVTPage } from '../pages/s-vt/s-vt';
import { ArtsPage } from '../pages/arts/arts';
import { HistoirePage } from '../pages/histoire/histoire';
import { HistoireSuitePage } from '../pages/histoire-suite/histoire-suite';
import { FranAisPrNoms2Page } from '../pages/fran-ais-pr-noms2/fran-ais-pr-noms2';
import { NotesPage } from '../pages/notes/notes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//BTH
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
//BTH


@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    MathsPage,
    FranAisPage,
    FranAisSuitePage,
    FranAisPrNomsPage,
    GOgraphiePage,
    SVTPage,
    ArtsPage,
    HistoirePage,
    HistoireSuitePage,
    FranAisPrNoms2Page,
    NotesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //BTH
    AngularFireModule.initializeApp(firebaseConfig.fire)
    //BTH
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    MathsPage,
    FranAisPage,
    FranAisSuitePage,
    FranAisPrNomsPage,
    GOgraphiePage,
    SVTPage,
    ArtsPage,
    HistoirePage,
    HistoireSuitePage,
    FranAisPrNoms2Page,
    NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}