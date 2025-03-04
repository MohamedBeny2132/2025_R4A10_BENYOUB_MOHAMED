import { Component, inject, OnInit } from '@angular/core';
import { Trip, TripService } from '../trip.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ButtonDeleteComponent } from "../button-delete/button-delete.component";
@Component({
  selector: 'app-page-detail',
  imports: [ButtonDeleteComponent],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.scss'
})

export class PageDetailComponent implements OnInit {
  public trip!: Trip;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private id!: number ;
  serviceTrip = inject(TripService);
  

  deleteTrip()
  {
    this.router.navigate(['/home']);
  }
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    
    this.trip = this.serviceTrip.getTripById(this.id)!;
  }

}
