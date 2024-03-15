import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabAgencyComponent } from './cab-agency.component';

describe('CabAgencyComponent', () => {
  let component: CabAgencyComponent;
  let fixture: ComponentFixture<CabAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabAgencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
