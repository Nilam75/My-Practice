import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSignUpComponent } from './principle-sign-up.component';

describe('PrincipleSignUpComponent', () => {
  let component: PrincipleSignUpComponent;
  let fixture: ComponentFixture<PrincipleSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleSignUpComponent]
    });
    fixture = TestBed.createComponent(PrincipleSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
