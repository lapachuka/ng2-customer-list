import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import * as moment from 'moment';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  templateUrl: './user-detail.html',
  selector: 'user-detail-dialog'
})

export class UserDetailDialog {
  days = [];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  languages = ['Eng', 'Hung', 'Germ', 'Slov', 'Pol'];
  years = [];

  toggle = '';
  user = {
    $key: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birthday: '',
    description: '',
    language: {
      german: false,
      hungarian: false,
      english: false,
      slovakian: false,
      polish: false
    },
    day: 1,
    month: 'Jan',
    year: 2000
  };
  users: FirebaseListObservable<any>;

  constructor(public dialogRef: MdDialogRef<UserDetailDialog>, public af: AngularFire) {

    this.users = af.database.list('/users');

    for (let i = 1950; i < 2017; i++) {
      this.years.push(i);
    }
    this.chooseMonth();


  }

  setUser(user) {
    Object.assign(this.user, user);
    this.user.$key = user.$key;
  }

  chooseMonth() {
    let daysLength = moment(this.user.year + '-' + this.user.month, 'YYYY-MMM').daysInMonth();
    this.days = [];
    for (let i = 1; i <= daysLength; i++) {
      this.days.push(i);
    }
  }

  save() {
    let key = this.user.$key;
    delete this.user.$key;
    this.af.database.object('/users/' + key).update(this.user);
    this.dialogRef.close();
  }

  create() {
    delete this.user.$key;
    this.users.push(this.user);
    this.dialogRef.close();
  }

  add() {
    delete this.user.$key;
    this.users.push(this.user);
    this.clearUserData();
  }

  clearUserData(){
    this.user.first_name = '';
    this.user.last_name = '';
    this.user.email = '';
    this.user.phone = '';
    this.user.birthday = '';
    this.user.description = '';
    this.user.day = 1;
    this.user.month = 'Jan';
    this.user.year = 2000;
  }

  closer() {
    this.dialogRef.close();
  }

}
