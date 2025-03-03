import { Component } from '@angular/core';
import { ListTripComponent } from '../list-trip/list-trip.component';

@Component({
  selector: 'app-home-page',
  imports: [ListTripComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
