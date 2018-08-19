import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkExperienceComponent } from './main-work-experience.component';

describe('MainWorkExperienceComponent', () => {
  let component: MainWorkExperienceComponent;
  let fixture: ComponentFixture<MainWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
