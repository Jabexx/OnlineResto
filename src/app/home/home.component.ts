import { Component } from '@angular/core';
import { RoutingComponent } from '../routing/routing.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private routing: RoutingComponent) {}

  navigateTo(path: string) {
    this.routing.navigateTo(path);
  }
}
