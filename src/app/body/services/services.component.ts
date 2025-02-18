import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { ElementComponent } from './element/element.component';
import { VoirplusComponent } from './voirplus/voirplus.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [DescriptionComponent,ElementComponent,VoirplusComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass'
})
export class ServicesComponent {

}
