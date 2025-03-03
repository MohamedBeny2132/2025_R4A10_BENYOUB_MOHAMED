import { Component, inject } from '@angular/core';
import { Trip, TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-make',
  imports: [],
  templateUrl: './page-make.component.html',
  styleUrl: './page-make.component.scss'
})

export class PageMakeComponent {
  serviceTrip = inject(TripService); 
  router = inject(Router);

  trip!:Trip;


  rdmTravel(): void
  {
    this.trip = this.serviceTrip.makeRdmTrip();
    this.valider();
  }

  valider(): void {
    const message = `Voulez-vous confirmer ce voyage ?\n\nDestination : ${this.trip.dest}\nDescription : ${this.trip.desc}`;
    const isConfirmed = window.confirm(message);

    if (isConfirmed) {
      this.serviceTrip.addTrip(this.trip);
      this.router.navigate(['/home']);
    }
  }

}
