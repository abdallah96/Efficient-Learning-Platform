import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAnswerComponent } from './material-answer.component';

describe('MaterialAnswerComponent', () => {
  let component: MaterialAnswerComponent;
  let fixture: ComponentFixture<MaterialAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
