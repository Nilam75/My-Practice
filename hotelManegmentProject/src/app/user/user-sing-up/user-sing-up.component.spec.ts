import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingUpComponent } from './user-sing-up.component';

describe('UserSingUpComponent', () => {
  let component: UserSingUpComponent;
  let fixture: ComponentFixture<UserSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSingUpComponent]
    });
    fixture = TestBed.createComponent(UserSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
