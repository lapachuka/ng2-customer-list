import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  templateUrl: './delete-dialog.component.html',
  selector: 'delete-dialog'
})

export class DeleteDialog {


  constructor(public dialogRef: MdDialogRef<DeleteDialog>) {

  }


}
