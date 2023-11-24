import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.shoppingCartService.getCartItems();
  }

  removeFromCart(item: any): void {
    this.shoppingCartService.removeFromCart(item);
    this.loadCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    // Lógica para realizar la compra
    // Puedes implementar aquí la interacción con tu sistema de compra
  }
}
