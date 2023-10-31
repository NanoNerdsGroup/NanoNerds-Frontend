import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  componentData: any;
  dataSource: any[];

  constructor(public builder: FormBuilder, private postsService: PostsService,
              public addEditService: AddEditPostService) {
    this.filteredOptions = this.options.slice();

    this.currentDate = new Date();

    this.formAddComponent = this.builder.group({
      photo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
    const currentUserJSON = localStorage.getItem('currentUser');
    this.user = JSON.parse(currentUserJSON ?? '{}');
    this.componentData = {} as any;
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
      let currentComponent: any = JSON.parse(localStorage.getItem('current-post') ?? '{}');

      this.formAddComponent.get('name')?.setValue(currentComponent.name);
      this.formAddComponent.get('photo')?.setValue(currentComponent.photo);
      this.formAddComponent.get('manufacturer')?.setValue(currentComponent.manufacturer);
      this.formAddComponent.get('type')?.setValue(currentComponent.type);
      this.formAddComponent.get('amount')?.setValue(currentComponent.amount);
      this.formAddComponent.get('price')?.setValue(currentComponent.price);
      this.formAddComponent.get('description')?.setValue(currentComponent.description);

      this.componentData = currentComponent;
    }
  }

  private addPost() {
    this.postsService.create(this.componentData).subscribe((response:any)=>{
      this.dataSource.push(response);
    })
  }

  onPostAdded(com: any) {
    this.componentData = com;
    this.addPost();
  }

  validatePostFromForm(){
    if(this.formAddComponent.valid){
      if (this.addEditService.modeEdit){
        this.componentData.photo = this.formAddComponent.get('photo')?.value;
        this.componentData.name =this.formAddComponent.get('name')?.value;
        this.componentData.manufacturer =this.formAddComponent.get('manufacturer')?.value;
        this.componentData.type =this.formAddComponent.get('type')?.value;
        this.componentData.description =this.formAddComponent.get('description')?.value;
        this.componentData.amount =this.formAddComponent.get('amount')?.value;
        this.componentData.price =this.formAddComponent.get('price')?.value;
        this.onElementUpdated(this.componentData);
      }else{
        const formattedDate = `${this.currentDate.getDate()}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`;
        this.onPostAdded({
          id: 0,
          name: this.formAddComponent.get('name')?.value,
          price: this.formAddComponent.get('price')?.value,
          photo: this.formAddComponent.get('photo')?.value,
          description: this.formAddComponent.get('description')?.value,
          date: formattedDate,
          manufacturer: this.formAddComponent.get('manufacturer')?.value,
          type: this.formAddComponent.get('type')?.value,
          amount: this.formAddComponent.get('amount')?.value,

        })
      }
    }
    else{
      console.log('form no enviado');
    }
  }

  /*Update*/
  private updatePost() {
    let comp = this.componentData;
    this.postsService.update(comp.id, comp).subscribe((response: any) => {
      this.dataSource = this.dataSource.map((o: any) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onElementUpdated(element: any) {
    this.componentData = element;
    this.updatePost();
  }
}
