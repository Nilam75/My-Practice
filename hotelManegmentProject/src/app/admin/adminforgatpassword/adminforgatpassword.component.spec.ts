import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforgatpasswordComponent } from './adminforgatpassword.component';

describe('AdminforgatpasswordComponent', () => {
  let component: AdminforgatpasswordComponent;
  let fixture: ComponentFixture<AdminforgatpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminforgatpasswordComponent]
    });
    fixture = TestBed.createComponent(AdminforgatpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
