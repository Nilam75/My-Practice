import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanckBarComponent } from './sanck-bar.component';

describe('SanckBarComponent', () => {
  let component: SanckBarComponent;
  let fixture: ComponentFixture<SanckBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanckBarComponent]
    });
    fixture = TestBed.createComponent(SanckBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
