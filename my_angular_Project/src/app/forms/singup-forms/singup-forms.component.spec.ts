import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupFormsComponent } from './singup-forms.component';

describe('SingupFormsComponent', () => {
  let component: SingupFormsComponent;
  let fixture: ComponentFixture<SingupFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingupFormsComponent]
    });
    fixture = TestBed.createComponent(SingupFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
