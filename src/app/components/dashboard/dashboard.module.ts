import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";


import {
  MdInputModule, MdButtonModule, MdToolbarModule, MdSelectModule, MdCardModule,
  MdButtonToggleModule
} from "@angular/material";
import {UserDetailDialog} from "../user-detail/user-detail.component";
import {FormsModule} from "@angular/forms";
import {DeleteDialog} from "./delete-dialog/delete-dialog.component";

@NgModule({
  declarations: [
    DashboardComponent,
    DeleteDialog,
    UserDetailDialog
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdCardModule,
    MdButtonToggleModule,
    MdToolbarModule
  ],
  entryComponents: [UserDetailDialog, DeleteDialog]
})

export class DashboardModule{}
