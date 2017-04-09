import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  public fullList = [];
  private schools = ['uz-center', 'uz-nr', 'mukachevo'];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Ужгород - Ц', 'Ужгород - НР', 'Мукачево'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];
  public barChartAgeData: any[] = [];

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
    console.log('statistic component');
    this.getList();
  }

  getList() {
    this.af.database.list('/users')
      .subscribe((resp) => {
        this.fullList = resp;
        this.prepareDataForLanguageBar();
        this.prepareDataForAgeBar();
      });
  }

  prepareDataForLanguageBar() {
    this.barChartData = [
      {data: this.getLanguagePerSchool('english'), label: 'English'},
      {data: this.getLanguagePerSchool('hungarian'), label: 'Hungarian'},
      {data: this.getLanguagePerSchool('german'), label: 'German'},
      {data: this.getLanguagePerSchool('polish'), label: 'Polish'},
      {data: this.getLanguagePerSchool('slovakian'), label: 'Slovakian'},
    ]
  }

  getLanguagePerSchool(language) {
    let barData = [];

    this.schools.forEach((school) => {

      let students = this.fullList.filter((student) => {
        return student.location === school && student.language[language]
      });

      barData.push(students.length);
    });

    return barData;
  }

  prepareDataForAgeBar(){
    this.barChartAgeData = [
      {data: this.getAgeDataPerSchool('kids'), label: 'Kids'},
      {data: this.getAgeDataPerSchool('teenagers'), label: 'Teenagers'},
      {data: this.getAgeDataPerSchool('adults'), label: 'Adults'}
    ]
  }

  getAgeDataPerSchool(ageType){
    let barData = [];
    let curYear = new Date().getFullYear();

    this.schools.forEach((school) => {
      let students = this.fullList.filter((student) => {
        let boolFilter =  student.location === school;

        if(ageType === 'kids'){
          boolFilter = boolFilter && student.year > (curYear - 12);
        }else if(ageType === 'teenagers'){
          boolFilter = boolFilter && student.year <= (curYear - 12) && student.year >= (curYear - 17);
        }else{
          boolFilter = boolFilter && student.year < (curYear - 17);
        }

        return boolFilter;
      });

      barData.push(students.length);
    });

    return barData;
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
