import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelRegisterComponent } from './new-hotel-register.component';

describe('NewHotelRegisterComponent', () => {
  let component: NewHotelRegisterComponent;
  let fixture: ComponentFixture<NewHotelRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHotelRegisterComponent]
    });
    fixture = TestBed.createComponent(NewHotelRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
