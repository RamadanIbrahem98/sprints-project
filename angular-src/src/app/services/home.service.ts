import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor(private http:HttpClient) { }
  getCategories(){
    return this.http.get('http://localhost:8080/api/v1/categories')
  }
  getPlaces(categoryId:any){
    return this.http.get(`http://localhost:8080/api/v1/categories/${categoryId}/places`);
  }
  getPlace(categoryId:any,placeId:any){
    return this.http.get(`http://localhost:8080/api/v1/categories/${categoryId}/places/${placeId}`);
  }
}
