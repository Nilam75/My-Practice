import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuccesComponent } from './admin-succes.component';

describe('AdminSuccesComponent', () => {
  let component: AdminSuccesComponent;
  let fixture: ComponentFixture<AdminSuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSuccesComponent]
    });
    fixture = TestBed.createComponent(AdminSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
