import { Component } from '@angular/core';
import { PartVirtual } from './PartVirtual/partVirtual.component';

@Component({
  selector: 'app-virtual',
  standalone: true,
  imports: [PartVirtual],
  templateUrl: './virtual.component.html',
  styleUrl: './virtual.component.sass'
})

export class VirtualComponent {
    image= "/assets/virtual-healthcare.png";
  }