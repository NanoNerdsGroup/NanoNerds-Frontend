import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../model/post/post";
import {PostsService} from "../../services/posts/posts.service";
import {AddEditPostService} from "../../services/add-edit-post/add-edit-post.service";
import {UserEntity} from "../../../security/model/user.entity";

@Component({
  selector: 'app-add-edit-form-post',
  templateUrl: './add-edit-form-post.component.html',
  styleUrls: ['./add-edit-form-post.component.css']
})
export class AddEditFormPostComponent implements OnInit{
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  options: string[] = ['CPU', 'GPU', 'PC GAMER', 'PANTALLA', 'TECLADO'];
  filteredOptions: string[];
  formAddComponent: FormGroup;
  errorMessage: string = '';

  currentDate: Date;

  user :UserEntity;
  postData: Post;
  dataSource: Post[];

  constructor(public builder: FormBuilder, private postsService: PostsService,
              public addEditService: AddEditPostService) {
    this.filteredOptions = this.options.slice();

    this.currentDate = new Date();

    this.formAddComponent = this.builder.group({
      photo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      type: ['', [Validators.required]],
      desription: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
    const currentUserJSON = localStorage.getItem('currentUser');
    this.user = JSON.parse(currentUserJSON ?? '{}');
    this.postData = {} as Post;
    this.dataSource = [];
  }
  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
  handleBlur(): void {
    const inputValue = this.input.nativeElement.value.toLowerCase();
    if (!this.options.map(option => option.toLowerCase()).includes(inputValue)) {
      this.formAddComponent.get('type')?.setValue('');
    }
  }

  ngOnInit(): void {

    if(this.addEditService.modeEdit){
      let currentPost: Post = JSON.parse(localStorage.getItem('current-post') ?? '{}') as Post;

      this.formAddComponent.get('name')?.setValue(currentPost.product.name);
      this.formAddComponent.get('photo')?.setValue(currentPost.photo);
      this.formAddComponent.get('brand')?.setValue(currentPost.product.brand);
      this.formAddComponent.get('type')?.setValue(currentPost.product.type);
      this.formAddComponent.get('amount')?.setValue(currentPost.product.amount);
      this.formAddComponent.get('price')?.setValue(currentPost.product.unitPrice);
      this.formAddComponent.get('desription')?.setValue(currentPost.description);

      this.postData = currentPost;
    }



  }

  private addPost() {
    this.postsService.create(this.postData).subscribe((response:any)=>{
      this.dataSource.push(response);
    })
  }

  onPostAdded(post: Post) {
    this.postData = post;
    this.addPost();
  }

  validatePostFromForm(){
    if(this.formAddComponent.valid){
      if (this.addEditService.modeEdit){
        this.postData.photo = this.formAddComponent.get('photo')?.value;
        this.postData.product.name =this.formAddComponent.get('name')?.value;
        this.postData.product.brand =this.formAddComponent.get('brand')?.value;
        this.postData.product.type =this.formAddComponent.get('type')?.value;
        this.postData.description =this.formAddComponent.get('desription')?.value;
        this.postData.product.amount =this.formAddComponent.get('amount')?.value;
        this.postData.product.unitPrice =this.formAddComponent.get('price')?.value;
        this.onElementUpdated(this.postData);
      }else{
        const formattedDate = `${this.currentDate.getDate()}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`;
        this.onPostAdded({
          id: 0,
          userId: this.user.id,
          product: {
            name: this.formAddComponent.get('name')?.value,
            amount: this.formAddComponent.get('amount')?.value,
            brand: this.formAddComponent.get('brand')?.value,
            unitPrice: this.formAddComponent.get('price')?.value,
            type: this.formAddComponent.get('type')?.value
          },
          date: formattedDate,
          description: this.formAddComponent.get('desription')?.value,
          photo: this.formAddComponent.get('photo')?.value
        })
      }
    }
    else{
      console.log('form no enviado');
    }
  }

  /*Update*/
  private updatePost() {
    let post = this.postData;
    this.postsService.update(post.id, post).subscribe((response: any) => {
      this.dataSource = this.dataSource.map((o: Post) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onElementUpdated(element: Post) {
    this.postData = element;
    this.updatePost();
  }
}
