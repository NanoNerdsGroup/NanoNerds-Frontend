import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AddEditPostService} from "../../services/add-edit-post/add-edit-post.service";

@Component({
  selector: 'app-card-preview-post',
  templateUrl: './card-preview-post.component.html',
  styleUrls: ['./card-preview-post.component.css']
})
export class CardPreviewPostComponent {
  @Input('data') component!: any;
  @Output() deleteClicked = new EventEmitter<any>();

  constructor(public router: Router, public addEditService: AddEditPostService) {
  }

  onDeleteClick(): void {
    this.deleteClicked.emit(this.component);
  }

  onUpdateClick(){
    this.addEditService.modeEdit = true;
    localStorage.setItem('current-post', JSON.stringify(this.component))
    this.router.navigate(['/add-post']);
  }
}
