import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasmoHeaderComponent } from './phasmo-header.component';

describe('PhasmoHeaderComponent', () => {
  let component: PhasmoHeaderComponent;
  let fixture: ComponentFixture<PhasmoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhasmoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhasmoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
