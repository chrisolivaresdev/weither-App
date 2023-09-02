import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav">
      <a class="brand" [routerLink]="['/']">WeatherApp</a>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
