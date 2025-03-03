import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.scss',
})
export class ButtonDeleteComponent {
  serviceTrip = inject(TripService);
  id_trip! : number;

  @Input()
    set trip(value: number) {
      this.id_trip = value;
    }
  
    get trip(): number {
      return this.id_trip;
    }
  @Output() tripDeleted = new EventEmitter<number>(); 

  deleteTrip() {
    if (window.confirm('Êtes-vous sûr ?')) {
      this.serviceTrip.removeTrip(this.id_trip);
      this.tripDeleted.emit(this.id_trip);
    }
  }
}