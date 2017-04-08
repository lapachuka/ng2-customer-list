import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html'
})

export class SignInComponent {
  errorMsg = '';
  constructor(public af: AngularFire) {

  }

  signIn(form: any) {
    this.af.auth.login(form.value).catch((resp) => {
      this.errorMsg = resp.message;
    })
  }
}
