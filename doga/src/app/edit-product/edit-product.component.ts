import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product:any
  id?: null;
  name?: string;
  price?: string;
  description?: string;
  quantity?: string;
  image_url?: string;

  constructor(private base:BaseService){
    // this.aroute.paramMap.subscribe(
    //   (param:any)=>this.product=JSON.parse(JSON.stringify(param.params))
    // )
    this.product=this.base.getCurProduct()
  }

  save(){
    this.base.addTetel(this.product,false)
  }
  del(){
    this.base.addTetel(this.product, true)
  }

  // uj(){
  //   console.log(this.product)
  //   const product= () => {

  //     this.id=null;
  //     this.name="";
  //     this.price="";
  //     this.description="";
  //     this.quantity="";
  //     this.image_url="";
  //   };
  //   this.product=product
  //   console.log(product)
  // }
  uj(){
    this.product= new Product(null,"","","","","")
    console.log(this.product)
    this.product.id=null;
    this.product.name="";
    this.product.price="";
    this.product.description="";
    this.product.quantity="";
    this.product.image_url="";
    console.log(this.product)
  }

}
