import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSingUpComponent } from './owner-sing-up.component';

describe('OwnerSingUpComponent', () => {
  let component: OwnerSingUpComponent;
  let fixture: ComponentFixture<OwnerSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSingUpComponent]
    });
    fixture = TestBed.createComponent(OwnerSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
