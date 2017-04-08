import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MdInputModule, MdButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdButtonModule
  ]
})

export class AccountModule {
}
