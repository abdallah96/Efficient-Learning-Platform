import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenClassroomComponent } from './taken-classroom.component';

describe('TakenClassroomComponent', () => {
  let component: TakenClassroomComponent;
  let fixture: ComponentFixture<TakenClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
