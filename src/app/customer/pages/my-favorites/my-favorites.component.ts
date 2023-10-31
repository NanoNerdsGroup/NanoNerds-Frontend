import { Component } from '@angular/core';
import{ComponentsService} from "../../services/components.service";

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent {

  favoriteComponents: any[] ;

  constructor(private componentsService: ComponentsService) {
    this.favoriteComponents = this.componentsService.getFavoriteComponents();
  }


  removeFromFavorites(component: any) {
    this.componentsService.removeFromFavorites(component);
    // Actualizar la lista de componentes favoritos
    this.favoriteComponents = this.componentsService.getFavoriteComponents();
  }
}
