import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartVirtual } from './partVirtual.component';


describe('PartVirtual', () => {
  let component: PartVirtual;
  let fixture: ComponentFixture<PartVirtual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartVirtual]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartVirtual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});