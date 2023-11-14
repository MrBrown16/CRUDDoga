import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any
  edit=true

  constructor(private base:BaseService, private router:Router){
    this.base.getProducts().subscribe((adatok)=>this.products=adatok)
}

torol(product:any){
  this.base.addTetel(product,true)
}
modosit(id:any){
  this.base.setCurProduct(id)
  this.router.navigate(['/editproduct'])
}
}

