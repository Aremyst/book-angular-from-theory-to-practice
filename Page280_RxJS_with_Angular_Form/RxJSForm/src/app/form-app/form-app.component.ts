import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import 'rxjs/Rx';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);

  /* Observable Solution */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
      // DN: not clear why author used distinctUntilChanged here, now clear what he accomplishes by this.
      // .distinctUntilChanged()
      // Check if the whole form is valid
      .filter(data => this.form.valid)
      // Remove tags like <script>, <html> and other.
      .map(data => {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        return data
      })
      // Set lastUpdateTS Date object to current time.
      .map(data => {
        data.lastUpdateTS = new Date();
        return data
      })
      // Output only if user didn't type for 2 seconds
      .debounceTime(2000)
      // Output data after filter and map(s)
      .subscribe( data => console.log(JSON.stringify(data)));
  }

  /* None Observable Solution */
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     "comment": this.comment,
  //     "name": this.name,
  //     "email": this.email
  //   });
  //   this.form.valueChanges
  //       .subscribe( data => {
  //         if (this.form.valid) {
  //           data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
  //           data.lastUpdateTS = new Date();
  //           console.log(JSON.stringify(data))
  //         }
  //       });
  // }

  onSubmit() {
    console.log("Form submitted!");
  }
}
