import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLogoFooterComponent } from './img-logo-footer.component';

describe('ImgLogoFooterComponent', () => {
  let component: ImgLogoFooterComponent;
  let fixture: ComponentFixture<ImgLogoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgLogoFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgLogoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
