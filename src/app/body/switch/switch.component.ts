import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.sass'
})
export class SwitchComponent {
  
  @Input() currentIndex: number = 0;
  
  
  @Output() nextAvis = new EventEmitter<number>();
  
  emitNextAvis() {
      this.nextAvis.emit(1);
  }
  
  emitPreviousAvis() {
      this.nextAvis.emit(-1);
  }
}
