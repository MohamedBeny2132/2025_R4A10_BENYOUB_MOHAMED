import { Component } from '@angular/core';
import { FooterAboutComponent } from './footer-about/footer-about.component';
import { FooterHelpComponent } from './footer-help/footer-help.component';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [FooterAboutComponent, FooterHelpComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.sass'
})
export class FooterContentComponent {

}
