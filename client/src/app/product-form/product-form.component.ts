import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product';
import { ProductService } from '../shared/product/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  private product: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.product = this.productService.getter();
  }

  processForm(){
    if (this.product.id==undefined) {
      this.productService.createUser(this.product).subscribe((product) =>{
        console.log(product);
        this.router.navigate(['/product']);
      },(error)=> {
        console.log(error);
      })
    } else {
      this.productService.updateUser(this.product).subscribe((product)=>{
        console.log(product);
        this.router.navigate(['/product']);
      },(error) => {
        console.log(error);
      });
    }
    

}
}
