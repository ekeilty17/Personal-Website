import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEducationComponent } from './footer-education.component';

describe('FooterEducationComponent', () => {
  let component: FooterEducationComponent;
  let fixture: ComponentFixture<FooterEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
