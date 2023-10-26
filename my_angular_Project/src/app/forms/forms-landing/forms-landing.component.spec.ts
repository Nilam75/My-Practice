import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLandingComponent } from './forms-landing.component';

describe('FormsLandingComponent', () => {
  let component: FormsLandingComponent;
  let fixture: ComponentFixture<FormsLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsLandingComponent]
    });
    fixture = TestBed.createComponent(FormsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
