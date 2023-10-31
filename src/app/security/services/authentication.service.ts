import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {UserEntity} from "../model/user.entity";
import {catchError, Observable, retry, throwError} from "rxjs";
import {PostsService} from "../../seller/services/posts/posts.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private lastUserId = 0;



  getNextUserId(): number {
    // Incrementa el último ID de usuario y devuelve el siguiente ID
    this.lastUserId++;
    return this.lastUserId;
  }


  basePath : string = 'http://localhost:3000/api/v1';
  currentUser!: UserEntity;
  constructor(private http :  HttpClient) { }

  handleError(error :  HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      //Default error handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      // Unsuccessfully Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    //Return throwError Observable with Error Message to client
    return throwError(
      () => new Error('Something happened with request, please try again later')
    );
  }

  //Sign UP
  signUP(user : UserEntity): Observable<any>{
    return this.http.post(`${this.basePath}/sign-up`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Sign IN
  signIn(user :  UserEntity){
    return this.http.post(`${this.basePath}/sign-in`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

}
