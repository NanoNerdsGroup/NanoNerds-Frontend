import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: any[] = [];

  addToCart(component: any) {
    this.cart.push(component);
  }

  getCartItems() {
    return this.cart;
  }

  removeFromCart(component: any) {
    const index = this.cart.findIndex((item) => item.id === component.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
