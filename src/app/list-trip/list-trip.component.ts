import { Component, inject } from '@angular/core';
import { Trip, TripService } from '../trip.service';
import { TripComponent } from './trip/trip.component';
import { ButtonDeleteComponent } from '../button-delete/button-delete.component';

@Component({
  selector: 'app-list-trip',
  imports: [TripComponent,ButtonDeleteComponent], 
  templateUrl: './list-trip.component.html',
  styleUrl: './list-trip.component.scss',
})

export class ListTripComponent {
  serviceTrip = inject(TripService); 
  currentPage: number = 1; 
  trips: Trip[] = this.serviceTrip.getTrips(this.currentPage); 

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.trips = this.serviceTrip.getTrips(this.currentPage); // Met à jour les voyages
    }
  }

  nextPage() {
    if (this.currentPage < this.serviceTrip.nbPageMax()) {
      this.currentPage++;
      this.trips = this.serviceTrip.getTrips(this.currentPage); // Met à jour les voyages
    }
  }

  nbPageMax(): number {
    return this.serviceTrip.nbPageMax();
  }

  actualise(){
    this.trips = this.serviceTrip.getTrips(this.currentPage);
    console.log("hey");
    
  }
}