import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSucusessComponent } from './owner-sucusess.component';

describe('OwnerSucusessComponent', () => {
  let component: OwnerSucusessComponent;
  let fixture: ComponentFixture<OwnerSucusessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSucusessComponent]
    });
    fixture = TestBed.createComponent(OwnerSucusessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
