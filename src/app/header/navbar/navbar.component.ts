import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})

export class NavbarComponent {
  menus = [
    { label: "Home", href: "#" },
    { label: "Find a doctor", href: "#" },
    { label: "Apps", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "About us", href: "#" }
  ];
}