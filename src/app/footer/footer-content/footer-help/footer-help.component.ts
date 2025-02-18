import { Component } from '@angular/core';
import { FooterPartComponent } from './footer-part/footer-part.component';

@Component({
  selector: 'app-footer-help',
  standalone: true,
  imports: [FooterPartComponent],
  templateUrl: './footer-help.component.html',
  styleUrl: './footer-help.component.sass'
})
export class FooterHelpComponent {
  columns = [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Testimonials', href: '#' },
        { text: 'Find a doctor', href: '#' },
        { text: 'Apps', href: '#' }
      ]
    },
    {
      title: 'Region',
      links: [
        { text: 'Indonesia', href: '#' },
        { text: 'Singapore', href: '#' },
        { text: 'Hongkong', href: '#' },
        { text: 'Canada', href: '#' }
      ]
    },
    {
      title: 'Help',
      links: [
        { text: 'Help center', href: '#' },
        { text: 'Contact support', href: '#' },
        { text: 'Instructions', href: '#' },
        { text: 'How it works', href: '#' }
      ]
    }
  ];
}
