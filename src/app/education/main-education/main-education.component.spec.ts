import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEducationComponent } from './main-education.component';

describe('MainEducationComponent', () => {
  let component: MainEducationComponent;
  let fixture: ComponentFixture<MainEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
