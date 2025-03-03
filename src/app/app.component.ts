import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { PiedComponent } from './pied/pied.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,PiedComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp_voyage';
}
