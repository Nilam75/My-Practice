import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingUpComponent } from './admin-sing-up.component';

describe('AdminSingUpComponent', () => {
  let component: AdminSingUpComponent;
  let fixture: ComponentFixture<AdminSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSingUpComponent]
    });
    fixture = TestBed.createComponent(AdminSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
