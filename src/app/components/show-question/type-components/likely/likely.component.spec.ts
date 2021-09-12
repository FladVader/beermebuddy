import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikelyComponent } from './likely.component';

describe('LikelyComponent', () => {
  let component: LikelyComponent;
  let fixture: ComponentFixture<LikelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
