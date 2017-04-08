import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccountModule} from "./components/account/account.module";
import {ZonesModule} from "./zones/zones.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.reoutes";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import 'moment';
import {BirthdaysModule} from "./components/birthdays/birthdays.module";
import {ChartsModule} from "ng2-charts";


const firebaseConfig = {
  apiKey: "AIzaSyBE2591Z41BNwbOd_Zj2nNFrx7cqni3JZg",
  authDomain: "ionic2-f7dd2.firebaseapp.com",
  databaseURL: "https://ionic2-f7dd2.firebaseio.com",
  storageBucket: "ionic2-f7dd2.appspot.com",
  messagingSenderId: "392840020050"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccountModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BirthdaysModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ZonesModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
