import {Product} from "../product/product";

export class Post {
  id: number;
  userId: number;
  product: Product;
  date: string;
  description: string;
  photo: string;

  constructor() {
    this.id= 0;
    this.userId=0;
    this.product = new Product();
    this.date = '';
    this.description= '';
    this.photo='';
  }
}
