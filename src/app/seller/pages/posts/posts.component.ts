import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post/post";
import {PostsService} from "../../services/posts/posts.service";
import {Router} from "@angular/router";
import {AddEditPostService} from "../../services/add-edit-post/add-edit-post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  postData: Post;
  dataSource: Post[]
  isEditMode:boolean=false;

  constructor(private postsService: PostsService, public addEditService: AddEditPostService
    , private route: Router) {
    this.postData = {} as Post;
    this.dataSource=[];
  }

  private resetEditState(){
    this.isEditMode = false;
    this.postData = {} as Post;
  }

  private getAllPost(){
    this.postsService.getAll().subscribe((response: any)=>{
      this.dataSource = response;
    })
  }



  private deletePost(id: number) {
    this.postsService.delete(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((o: Post) => {
        return o.id !== id ? o : false
      });
    });
  }



  onCancelEdit() {
    this.isEditMode = false;
    this.getAllPost();
  }

  onDeleteItem(element: Post) {
    this.deletePost(element.id);
  }

  onAddClick(){
    this.addEditService.modeEdit = false;
    this.route.navigate(['/add-post'])
  }

  ngOnInit(): void {
    this.getAllPost();
  }
}
