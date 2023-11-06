import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujectLandComponent } from './suject-land.component';

describe('SujectLandComponent', () => {
  let component: SujectLandComponent;
  let fixture: ComponentFixture<SujectLandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SujectLandComponent]
    });
    fixture = TestBed.createComponent(SujectLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
