import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStatementComponent } from './show-statement.component';

describe('ShowStatementComponent', () => {
  let component: ShowStatementComponent;
  let fixture: ComponentFixture<ShowStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
