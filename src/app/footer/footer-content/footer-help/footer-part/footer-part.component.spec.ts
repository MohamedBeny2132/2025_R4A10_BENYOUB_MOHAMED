import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPartComponent } from './footer-part.component';

describe('FooterPartComponent', () => {
  let component: FooterPartComponent;
  let fixture: ComponentFixture<FooterPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
