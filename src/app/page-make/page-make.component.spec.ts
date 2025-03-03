import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMakeComponent } from './page-make.component';

describe('PageMakeComponent', () => {
  let component: PageMakeComponent;
  let fixture: ComponentFixture<PageMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
