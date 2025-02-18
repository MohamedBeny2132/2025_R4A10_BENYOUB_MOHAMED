import { Component } from '@angular/core';
import { CarteComponent } from './carte/carte.component';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CarteComponent],
  templateUrl: './element.component.html',
  styleUrl: './element.component.sass'
})

export class ElementComponent {

  cartes= [
    {
      image: 'assets/search-doctor.png',
      titre: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
      image: 'assets/online-pharmacy.png',
      titre: 'Online pharmacy',
      description: 'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
      image: 'assets/consultation.png',
      titre: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
      image: 'assets/details-info.png',
      titre: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
      image: 'assets/emergency-care.png',
      titre: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your'
    },
    {
      image: 'assets/tracking.png',
      titre: 'Tracking',
      description: 'Track and save your medical history and health data '
    },
  ];

}
