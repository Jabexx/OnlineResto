import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items: Product[]) => {
      this.cartItems = this.groupCartItems(items);
    });
  }

  private groupCartItems(items: Product[]): { product: Product, quantity: number }[] {
    const groupedItems: { product: Product, quantity: number }[] = [];

    items.forEach(item => {
      const foundItem = groupedItems.find(groupedItem => groupedItem.product.id === item.id);
      if (foundItem) {
        foundItem.quantity++;
      } else {
        groupedItems.push({ product: item, quantity: 1 });
      }
    });

    return groupedItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  checkout() {
    
  }
}
