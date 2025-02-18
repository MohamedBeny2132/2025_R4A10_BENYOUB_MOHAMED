import { Component } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { WhatCustomerSayingComponent } from './what-customer-saying/what-customer-saying.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ServicesComponent,WhatCustomerSayingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.sass'
})
export class BodyComponent {
  
}
