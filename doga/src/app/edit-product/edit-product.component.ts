import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product?:Product
  
  // id?: null;
  // name?: string;
  // price?: string;
  // description?: string;
  // quantity?: string;
  // image_url?: string;

  constructor(private base:BaseService){
    this.product=this.base.getCurProduct()
    if (this.product==undefined) {
      this.createUj()
    }
  }

  save(){
    console.log(this.product)
    this.base.addTetel(this.product)
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
  // uj(){
  //   this.product= new Product(null,"","","","","")
  //   console.log(this.product)
  //   this.product.id=null;
  //   this.product.name="";
  //   this.product.price="";
  //   this.product.description="";
  //   this.product.quantity="";
  //   this.product.image_url="";
  //   console.log(this.product)
  // }
  createUj(){
    this.product=new Product(null,"","","","","");
  }
  saveable(){
    return false
  }
}
