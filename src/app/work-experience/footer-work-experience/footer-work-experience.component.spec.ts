import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkExperienceComponent } from './footer-work-experience.component';

describe('FooterWorkExperienceComponent', () => {
  let component: FooterWorkExperienceComponent;
  let fixture: ComponentFixture<FooterWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
