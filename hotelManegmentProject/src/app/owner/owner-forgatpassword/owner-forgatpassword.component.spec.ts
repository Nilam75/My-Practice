import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerForgatpasswordComponent } from './owner-forgatpassword.component';

describe('OwnerForgatpasswordComponent', () => {
  let component: OwnerForgatpasswordComponent;
  let fixture: ComponentFixture<OwnerForgatpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerForgatpasswordComponent]
    });
    fixture = TestBed.createComponent(OwnerForgatpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
