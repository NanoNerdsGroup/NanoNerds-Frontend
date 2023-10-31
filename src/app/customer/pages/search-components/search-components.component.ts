import {Component, OnInit} from '@angular/core';
import {ComponentsService} from "../../services/components.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-components',
  templateUrl: './search-components.component.html',
  styleUrls: ['./search-components.component.css']
})

export class SearchComponentsComponent implements OnInit {
  searchResults: any[] = [];
  searchTerm: string = ''; // Término de búsqueda
  filteredResults: any[] = []; // Para resultados filtrados

  constructor(
    private componentsService: ComponentsService,
    private router: Router // Agrega el Router
  ) {}

  ngOnInit() {
    this.getComponents();
  }

  getComponents() {
    this.componentsService.getAll().subscribe((response: any) => {
      this.searchResults = response;
      this.filteredResults = [...this.searchResults]; // Inicializa los resultados filtrados con todos los componentes
    });
  }

  // Función para filtrar los resultados
  filterResults() {
    this.filteredResults = this.searchResults.filter((component) =>
      component.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetails(result: any) {
    // Navegar a la página de detalles del componente con el ID del componente
    this.router.navigate(['/component-information', result.id]);
  }
}

