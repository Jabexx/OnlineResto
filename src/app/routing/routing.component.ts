import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
  currentComponent: any = HomeComponent;

  navigateTo(path: string) {
    switch (path) {
      case 'catalog':
        this.currentComponent = CatalogComponent;
        break;
      case 'cart':
        this.currentComponent = CartComponent;
        break;
      default:
        this.currentComponent = HomeComponent;
        break;
    }
  }
}
