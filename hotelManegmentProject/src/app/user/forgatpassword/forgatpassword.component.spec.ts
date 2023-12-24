import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgatpasswordComponent } from './forgatpassword.component';

describe('ForgatpasswordComponent', () => {
  let component: ForgatpasswordComponent;
  let fixture: ComponentFixture<ForgatpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgatpasswordComponent]
    });
    fixture = TestBed.createComponent(ForgatpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
