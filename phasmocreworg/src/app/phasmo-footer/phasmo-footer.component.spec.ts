import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasmoFooterComponent } from './phasmo-footer.component';

describe('PhasmoFooterComponent', () => {
  let component: PhasmoFooterComponent;
  let fixture: ComponentFixture<PhasmoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhasmoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhasmoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
