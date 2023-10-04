import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompComponent } from './admin-comp.component';

describe('AdminCompComponent', () => {
  let component: AdminCompComponent;
  let fixture: ComponentFixture<AdminCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompComponent]
    });
    fixture = TestBed.createComponent(AdminCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
