import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ComponentsService} from "../../services/components.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-component-information',
  templateUrl: './component-information.component.html',
  styleUrls: ['./component-information.component.css']
})
export class ComponentInformationComponent implements OnInit {
  component: any;

  constructor(
    private route: ActivatedRoute,
    private componentsService: ComponentsService,
    private shoppingCartService: ShoppingCartService

  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const componentId = params.get('id');
      if (componentId) {
        this.loadComponentInformation(componentId);
      }
    });
  }

  loadComponentInformation(id: string) {
    this.componentsService.getById(id).subscribe(
      (response) => {
        this.component = response;
      },
      (error) => {
        console.error('Error loading component details:', error);
      }
    );
  }


  addToFavorites(component: Component): void {
    this.componentsService.addToFavorites(component);
  }




  addToCart(component: any) {
   this.shoppingCartService.addToCart(component);
  }
}
