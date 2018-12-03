import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product/product-service.service';
import { Product } from '../shared/product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit() {

    this.productService.getAll().subscribe((products)=> {
      console.log(products);
      this.products = products;
    },(error)=>{
      console.log(error);
    })
  }

  deleteProduct(product){
    this.productService.deleteProduct(product.id).subscribe((data)=>{
      this.products.splice(this.products.indexOf(product),1);
  },(error)=>{
    console.log(error); 
  })

  }

  updateProduct(product){
    this.productService.setter(product);
    this.router.navigate(['/products']);
  }

  createProduct(){
    let product= new Product;
    this.productService.setter(product);
    this.router.navigate(['/products']);
  }

}
