import { Component } from '@angular/core';

@Component({
  selector: 'app-part_virtual',
  standalone: true,
  imports: [],
  templateUrl: './contenue.component.html',
  styleUrl: './contenue.component.sass'
})

export class PartVirtual {
  titre= "Virtual healtcare for you";
  contenue= "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";
  bouton="Consult today";
  
}