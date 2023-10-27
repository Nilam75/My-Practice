import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplSuceessComponent } from './principl-suceess.component';

describe('PrinciplSuceessComponent', () => {
  let component: PrinciplSuceessComponent;
  let fixture: ComponentFixture<PrinciplSuceessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinciplSuceessComponent]
    });
    fixture = TestBed.createComponent(PrinciplSuceessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
