import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  FormComponent,
  FormControlComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  TabComponent,
  UI
} from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';
import sdk from '@stackblitz/sdk';

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
  types = {
    form: FormComponent,
    control: FormControlComponent,
    label: FormLabelComponent,
    message: FormMessageComponent,
    item: FormItemComponent
  };
  handbook = HANDBOOK;
  language = Language;
  gender = Gender;
  countries: string[] = ['Russia', 'Australia', 'Austria', 'Brazil', 'Germany', 'Latvia', 'Monaco', 'Ukraine'];
  pets: string[] = ['cat', 'dog', 'fish', 'parrot'];
  status: string[] = ['married', 'not married', 'is actively looking'];

  @ViewChild('code')
  code: TabComponent;

  @ViewChild('example')
  example: ElementRef;

  @ViewChild('formTest')
  formTest: FormComponent;

  titleControl = this.fb.control(true);
  stateControl = this.fb.control(null);

  builder = this.fb.group({
    title: this.titleControl,
    state: this.stateControl,
  });

  errors = [];

  form = this.fb.group({
    personals: this.fb.group({
      deep: this.fb.group({
        firstName: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
        lastName: this.fb.control(null)
      }),
      phone: []
    }),
    children: this.fb.array([
      this.fb.group({
        name: this.fb.control(null, [Validators.required])
      }),
      this.fb.group({
        name: this.fb.control(null, [Validators.required])
      })
    ]),
    email: this.fb.control(null),
    password: this.fb.control(null),
    gender: this.fb.control(Gender.man),
    birthday: this.fb.control(new Date()),
    country: this.fb.control(this.countries[0]),
    notification: this.fb.control(true),
    pets: this.fb.control(null),
    status: this.fb.control(this.status[0])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  selected(active: number) {
    if (active === 3) {
      console.log();
      setTimeout(() =>
        sdk.embedProjectId(
          this.example.nativeElement,
          'junte-ui-test',
          {
            openFile: 'registration',
            view: 'preview',
            hideExplorer: true,
            hideNavigation: true,
            forceEmbedLayout: true,
            height: 500
          }));
    }
  }

  submit() {
    console.log('ok');
  }

}
