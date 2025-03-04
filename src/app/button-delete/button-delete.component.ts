import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [],
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss'],
})
export class ButtonDeleteComponent {
  private _idTrip!: number;
  serviceTrip = inject(TripService);

  @Input()
  set idTrip(value: number) {
    this._idTrip = value;
  }

  get idTrip(): number {
    return this._idTrip;
  }

  @Output() tripDeleted = new EventEmitter<number>();

  deleteTrip() {
    if (window.confirm('Êtes-vous sûr ?')) {
      this.serviceTrip.removeTrip(this.idTrip);
      this.tripDeleted.emit(this.idTrip);
    }
  }
}
