import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccomplishmentsComponent } from './footer-accomplishments.component';

describe('FooterAccomplishmentsComponent', () => {
  let component: FooterAccomplishmentsComponent;
  let fixture: ComponentFixture<FooterAccomplishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAccomplishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
