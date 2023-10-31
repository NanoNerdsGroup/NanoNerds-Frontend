import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = []; // Definir la variable para almacenar los elementos del carrito

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    // Cargar los elementos del carrito al inicializar el componente
    this.cartItems = this.shoppingCartService.getCartItems();
  }

  removeFromCart(item: any): void {
    // Llama a la función removeFromCart del servicio ShoppingCartService
    this.shoppingCartService.removeFromCart(item);
    // Actualiza la lista de elementos del carrito
    this.cartItems = this.shoppingCartService.getCartItems();
  }
  checkout(): void {
    // Lógica para realizar la compra
    // Puedes implementar aquí la interacción con tu sistema de compra
  }
}
