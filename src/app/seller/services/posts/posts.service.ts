import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../share/services/base.service";
import {Post} from "../../model/post/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Post>{

  constructor (http: HttpClient) {
    super(http);
    this.resourceEndPoint = '/posts'
  }
}
