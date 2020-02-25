import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { FormComponent } from 'junte-ui';
import { FormControlComponent } from 'junte-ui';
import { FormLabelComponent } from 'junte-ui';
import { FormMessageComponent } from 'junte-ui';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

enum Gender {
  man = 'man',
  woman = 'woman'
}

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})

export class FormTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {form: FormComponent, control: FormControlComponent, label: FormLabelComponent, message: FormMessageComponent};
  language = Language;
  gender = Gender;
  countries: string[] = ['Russia', 'Australia', 'Austria', 'Brazil', 'Germany', 'Latvia', 'Monaco', 'Ukraine'];
  pets: string[] = ['cat', 'dog', 'fish', 'parrot'];
  status: string[] = ['married', 'not married', 'is actively looking'];

  @ViewChild('code', {static: false}) code: TabComponent;

  titleControl = this.fb.control(true);
  loadingControl = this.fb.control(false);

  builder = this.fb.group({
    title: this.titleControl,
    loading: this.loadingControl,
  });

  nameControl = this.fb.control(null, [ Validators.required, Validators.minLength(3) ]);
  lastNameControl = this.fb.control(null);
  emailControl = this.fb.control(null);
  passwordControl = this.fb.control(null);
  genderControl = this.fb.control(Gender.man);
  birthdayControl = this.fb.control(new Date());
  countryControl = this.fb.control(this.countries[0]);
  notificationControl = this.fb.control(true);
  petsControl = this.fb.control(null);
  statusControl = this.fb.control(this.status[0]);

  form = this.fb.group({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    gender: this.genderControl,
    birthday: this.birthdayControl,
    country: this.countryControl,
    notification: this.notificationControl,
    pets: this.petsControl,
    status: this.statusControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.nameControl);
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  submit() {
    console.log('ok');
  }

}
