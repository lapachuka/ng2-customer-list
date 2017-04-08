import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {RouterModule} from "@angular/router";
import {InternalZoneActivateService} from "./internal-zone/itnernal-zone.activate";
import {AuthZoneActivateService} from "./auth-zone/auth-zone.activate";
import {MdToolbarModule, MdButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    InternalZoneComponent,
    AuthZoneComponent
  ],
  imports: [
    RouterModule,
    MdToolbarModule,
    MdButtonModule,
  ],
  providers: [
    InternalZoneActivateService,
    AuthZoneActivateService
  ]
})

export class ZonesModule{}
