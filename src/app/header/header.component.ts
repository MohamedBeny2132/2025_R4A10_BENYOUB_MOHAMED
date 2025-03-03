import { Component } from '@angular/core';
import { nom_site } from './../../../constantes';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {
  NOM_SITE = nom_site;

  liens = [
    {url: "/home", nom:"Home" },
    {url: "/make", nom:"Make Trip" },
  ];

}
