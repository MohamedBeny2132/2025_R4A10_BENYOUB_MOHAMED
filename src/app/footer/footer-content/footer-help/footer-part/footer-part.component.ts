import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  standalone: true,
  imports: [],
  templateUrl: './footer-part.component.html',
  styleUrl: './footer-part.component.sass'
})

export class FooterPartComponent {
  @Input() columnData: any;
}
