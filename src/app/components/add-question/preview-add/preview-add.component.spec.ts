import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAddComponent } from './preview-add.component';

describe('PreviewAddComponent', () => {
  let component: PreviewAddComponent;
  let fixture: ComponentFixture<PreviewAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
