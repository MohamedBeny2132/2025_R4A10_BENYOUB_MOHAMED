import { Component } from '@angular/core';
import { LogoFooterComponent } from './logo-footer/logo-footer.component';

@Component({
  selector: 'app-footer-about',
  standalone: true,
  imports: [LogoFooterComponent],
  templateUrl: './footer-about.component.html',
  styleUrl: './footer-about.component.sass'
})

export class FooterAboutComponent {

}
