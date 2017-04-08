import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";
import {MdDialog} from "@angular/material";
import {UserDetailDialog} from "../../components/user-detail/user-detail.component";

@Component({
  selector: 'auth-zone',
  templateUrl: './internal-zone.html'
})

export class InternalZoneComponent {
  constructor(public af: AngularFire, public dialog: MdDialog) {

  }

  exit() {
    this.af.auth.logout();
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserDetailDialog);
  }
}
