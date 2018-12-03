import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl:string='http://localhost:8080/api/products';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private product = new Product();
  constructor(private _http:Http) { }


  getAll() {
    return this._http.get(this.baseUrl,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  deleteProduct(id:Number) {
    return this._http.delete(this.baseUrl+'/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
  
  createUser(product:Product){

    return this._http.post(this.baseUrl,JSON.stringify(product),this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateUser(product:Product){

    return this._http.put(this.baseUrl,JSON.stringify(product),this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }

   setter(product: Product){
     this.product = product;
   }

  getter(){
    return this.product;
  }
}
