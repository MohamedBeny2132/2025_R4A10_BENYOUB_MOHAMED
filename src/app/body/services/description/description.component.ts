import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.sass'
})
export class DescriptionComponent {
  titre="Our services";
  description="We provide to you the best choiches for you. "
  + "Adjust it to your health needs and make sure your undergo treatment with our highly "
  +"qualified doctors you can consult with us which type of service is suitable for your health.";
}
