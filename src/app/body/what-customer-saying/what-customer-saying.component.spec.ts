import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCustomerSayingComponent } from './what-customer-saying.component';

describe('WhatCustomerSayingComponent', () => {
  let component: WhatCustomerSayingComponent;
  let fixture: ComponentFixture<WhatCustomerSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatCustomerSayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatCustomerSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
