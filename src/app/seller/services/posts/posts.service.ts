import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../share/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Component>{

  constructor (http: HttpClient) {
    super(http);
    this.resourceEndPoint = '/components'
  }
}
