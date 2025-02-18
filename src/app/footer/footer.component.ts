import { Component } from '@angular/core';
import { FooterContentComponent } from './footer-content/footer-content.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterContentComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
