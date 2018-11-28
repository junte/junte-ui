import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunteUiComponent } from './junte-ui.component';

describe('JunteUiComponent', () => {
  let component: JunteUiComponent;
  let fixture: ComponentFixture<JunteUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunteUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunteUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
