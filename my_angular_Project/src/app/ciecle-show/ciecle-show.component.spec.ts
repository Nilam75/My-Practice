import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiecleShowComponent } from './ciecle-show.component';

describe('CiecleShowComponent', () => {
  let component: CiecleShowComponent;
  let fixture: ComponentFixture<CiecleShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiecleShowComponent]
    });
    fixture = TestBed.createComponent(CiecleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
