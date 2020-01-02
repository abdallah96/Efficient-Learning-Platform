import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoComponent } from './sco.component';

describe('ScoComponent', () => {
  let component: ScoComponent;
  let fixture: ComponentFixture<ScoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
