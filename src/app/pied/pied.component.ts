import { Component } from '@angular/core';
import { nom_site } from '../../../constantes';
import { CopyrightComponent } from "./copyright/copyright.component";

@Component ({
  selector: 'app-pied',
  imports: [CopyrightComponent],
  templateUrl: './pied.component.html',
  styleUrl: './pied.component.scss'
})

export class PiedComponent {
  NOM_SITE : string = nom_site;
}
