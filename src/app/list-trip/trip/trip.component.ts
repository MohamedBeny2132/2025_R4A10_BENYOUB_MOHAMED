import { Component, Input} from '@angular/core';
import { Trip } from '../../trip.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip',
  imports: [RouterLink,CommonModule],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.scss'
})

export class TripComponent {
  private _trip!: Trip;

  @Input()
  set trip(value: Trip) {
    this._trip = value;
  }

  get trip(): Trip {
    return this._trip;
  }
}
