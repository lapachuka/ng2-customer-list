import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";
import * as moment from 'moment';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {
  birthdaysUsers = [];
  curMonth;
  curDay;

  constructor(public af: AngularFire) {
    this.curMonth = new Date().getMonth();
    this.curDay = new Date().getDate();

    af.database.list('/users',{
      query: {
        orderByChild: 'month',
        equalTo: moment().month(this.curMonth ).format("MMM").toString()
      }
    }).subscribe((resp) => {
        this.birthdaysUsers = resp;
        this.sortBirthdayList()
      });
  }

  ngOnInit() {
  }

  sortBirthdayList() {
    this.birthdaysUsers.sort((a, b) => {
      return a.day - b.day;
    });
  }


}
