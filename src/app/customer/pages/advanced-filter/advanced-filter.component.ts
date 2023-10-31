import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router
import {ComponentsService} from "../../services/components.service";

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.css']
})
export class AdvancedFilterComponent implements OnInit {
  filterForm: FormGroup;
  filteredComputers: any[] = []; // Asegúrate de usar el tipo correcto de datos según tu servicio

  constructor(
    private formBuilder: FormBuilder,
    private componentsService: ComponentsService,
    private router: Router // Inyecta Router
  ) {
    this.filterForm = this.formBuilder.group({
      budget: [''],
      type: [''],
      software: ['']
    });
  }

  ngOnInit() {
    // Inicialmente, muestra todos los resultados
    // @ts-ignore
    this.componentsService.getAll().subscribe((data: any[]) => {
      this.filteredComputers = data;
    });
  }

  filterComputers() {
    const { budget, type, software } = this.filterForm.value;

    // Filtra los resultados según los campos ingresados
    this.componentsService.filterComputers(budget, type, software).subscribe((data: any[]) => {
      this.filteredComputers = data;
    });
  }

  viewDetails(result: any) {
    this.router.navigate(['/component-information', result.id]);
  }
}
