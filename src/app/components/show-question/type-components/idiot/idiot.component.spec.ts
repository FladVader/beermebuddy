import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotComponent } from './idiot.component';

describe('IdiotComponent', () => {
  let component: IdiotComponent;
  let fixture: ComponentFixture<IdiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
