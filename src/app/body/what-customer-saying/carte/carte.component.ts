import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.sass'
})
export class CarteComponent {
  @Input() carte!: { nom: string; poste: string; message: string; image:string};
}
