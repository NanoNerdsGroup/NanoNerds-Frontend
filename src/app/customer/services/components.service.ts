import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  apiUrl = 'http://localhost:3000/api/v1/components';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  //filter advanced
  filterComputers(budget: number, type: string, software: string): Observable<any> {
    // Construye los parámetros de la solicitud HTTP


    let params = new HttpParams();
    if (budget !== null && budget !== undefined) {
      params = params.set('budget', budget.toString());
    }
    if (type) {
      params = params.set('type', type);
    }
    if (software) {
      params = params.set('software', software);
    }

    // Realiza la solicitud HTTP GET con los parámetros de filtro en la URL base
    return this.http.get(this.apiUrl, { params: params });
  }


  //

  private favoriteComponents: Component[] = [];

  // Método para obtener componentes favoritos
  getFavoriteComponents(): Component[] {
    return this.favoriteComponents;
  }

  // Método para agregar un componente a la lista de favoritos
  addToFavorites(component: Component): void {
    this.favoriteComponents.push(component);
  }

  // Método para eliminar un componente de la lista de favoritos

  removeFromFavorites(component: any) {
    // Eliminar componente de favoritos
    const index = this.favoriteComponents.findIndex((c) => component.id === component.id);
    if (index !== -1) {
      this.favoriteComponents.splice(index, 1);
    }
  }
}
