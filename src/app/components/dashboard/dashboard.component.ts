import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {UserDetailDialog} from "../user-detail/user-detail.component";
import {MdDialog} from "@angular/material";
import {DeleteDialog} from "./delete-dialog/delete-dialog.component";


@Component({
  templateUrl: './dashboard.html',
  selector: 'dashboard'
})

export class DashboardComponent {
  selectedOption: string;

  //users: FirebaseListObservable<any>;
  users = [];
  birthdaysUsers = [];
  fullList = [];
  filterList = [];
  offset = 0;
  userCount = 0;
  limit = 13;
  filter = {
    location: '',
    language: '',
    search: ''
  };


  constructor(public af: AngularFire, public dialog: MdDialog) {
    this.getList();
  }

  changeFilter() {

  }

  getList() {
    this.af.database.list('/users',{
      query: {
        orderByChild: 'last_name'
      }
    })
      .subscribe((resp) => {
        this.fullList = resp;
        this.getUsersList();
      });
  }

  next() {
    this.offset += this.limit;
    this.getUsersList();
  }

  prev() {
    this.offset -= this.limit;
    this.getUsersList();
  }

  getUsersList() {
    let filterUsers = this.filterUsers();

    this.userCount = filterUsers.length;
    this.users = filterUsers.slice(this.offset, this.offset + this.limit);
  }

  filterUsers() {
    return this.fullList.filter((user) => {
      let filterBoolean = true;

      if (this.filter.location) {
        filterBoolean = user.location === this.filter.location;
      }

      if (this.filter.language) {
        filterBoolean = filterBoolean && user.language[this.filter.language];
      }

      if (this.filter.search) {
        filterBoolean = filterBoolean && (user.last_name.includes(this.filter.search) || user.first_name.includes(this.filter.search));
      }

      return filterBoolean;
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserDetailDialog);
  }

  delete(user) {
    let dialogRef = this.dialog.open(DeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Delete') {
        this.af.database.object('/users/' + user.$key).remove();
      }
    });
  }

  openUserDialog(user) {
    let dialogRef = this.dialog.open(UserDetailDialog);

    dialogRef.componentInstance.setUser(user);
    dialogRef.componentInstance.chooseMonth();
  }


}
