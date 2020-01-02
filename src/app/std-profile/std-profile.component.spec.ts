import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProfileComponent } from './std-profile.component';

describe('StdProfileComponent', () => {
  let component: StdProfileComponent;
  let fixture: ComponentFixture<StdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
