import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

class IHero {
  id: number;
  title: string;
  likes: number;
}

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent implements OnInit {

  ui = UI;

  searchControl = this.fb.control(false);
  staticControl = this.fb.control([1, 3, 99]);
  ajaxControl = this.fb.control([1, 3]);

  form = this.fb.group({
    search: this.searchControl,
    static: this.staticControl,
    ajax: this.ajaxControl
  });
  heroes: IHero[] = [
    {id: 1, title: 'Spider man', likes: 1},
    {id: 2, title: 'Bet man', likes: 2},
    {id: 3, title: 'Super man', likes: 3}
  ];

  searchHeroes(query: string): Observable<IHero[]> {
    return of(this.heroes.filter(h => !query
      || h.title.toLowerCase().includes(query.toLowerCase())))
      .pipe(delay(1000));
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(c => console.log(c));
  }

}
