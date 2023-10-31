import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEditPostService {

  modeEdit: boolean;
  constructor() { this.modeEdit = false}
}
