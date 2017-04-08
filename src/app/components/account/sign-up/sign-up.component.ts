import {Component} from "@angular/core";
import {AngularFireAuth} from "angularfire2";

@Component({
  templateUrl: './sign-up.html',
  selector: 'sign-up'
})

export class SignUpComponent {
  constructor(private fb: AngularFireAuth) {

  }

  signUp(form) {
    this.fb.createUser(form.value).catch(resp => {
     // console.log(resp);
    })
  }
}
