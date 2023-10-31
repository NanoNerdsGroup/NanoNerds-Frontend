import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts/posts.service";
import {Router} from "@angular/router";
import {AddEditPostService} from "../../services/add-edit-post/add-edit-post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  componentData: any;
  dataSource: any[]
  isEditMode:boolean=false;

  constructor(private postsService: PostsService, public addEditService: AddEditPostService
    , private route: Router) {
    this.componentData = {} as any;
    this.dataSource=[];
  }

  private resetEditState(){
    this.isEditMode = false;
    this.componentData = {} as any;
  }

  private getAllComponent(){
    this.postsService.getAll().subscribe((response: any)=>{
      this.dataSource = response;
    })
  }



  private deleteComponent(id: number) {
    this.postsService.delete(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((o: any) => {
        return o.id !== id ? o : false
      });
    });
  }



  onCancelEdit() {
    this.isEditMode = false;
    this.getAllComponent();
  }

  onDeleteItem(element: any) {
    this.deleteComponent(element.id);
  }

  onAddClick(){
    this.addEditService.modeEdit = false;
    this.route.navigate(['/add-post'])
  }

  ngOnInit(): void {
    this.getAllComponent();
  }
}
