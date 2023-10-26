import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotFoundComponent } from './form-not-found.component';

describe('FormNotFoundComponent', () => {
  let component: FormNotFoundComponent;
  let fixture: ComponentFixture<FormNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNotFoundComponent]
    });
    fixture = TestBed.createComponent(FormNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
