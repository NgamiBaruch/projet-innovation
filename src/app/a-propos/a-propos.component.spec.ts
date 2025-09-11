import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposComponent } from './a-propos.component';

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AProposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
