import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccomplishmentsComponent } from './main-accomplishments.component';

describe('MainAccomplishmentsComponent', () => {
  let component: MainAccomplishmentsComponent;
  let fixture: ComponentFixture<MainAccomplishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAccomplishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
