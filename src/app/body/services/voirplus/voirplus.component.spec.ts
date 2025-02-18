import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirplusComponent } from './voirplus.component';

describe('VoirplusComponent', () => {
  let component: VoirplusComponent;
  let fixture: ComponentFixture<VoirplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirplusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
