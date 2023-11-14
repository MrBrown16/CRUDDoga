import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  url="http://localhost:3000/products"
  private refProduct:any=[];
  curProduct:any
  constructor(private http:HttpClient) { 
    this.getProducts().subscribe((adatok)=>this.refProduct= adatok)
  }
  
  getProducts(){
    return this.http.get(this.url)
  }
  setCurProduct(id:any){
    this.curProduct= this.refProduct[this.keresProduct(id)]
    console.log(this.curProduct)
  }
  getCurProduct(){
    return this.curProduct
  }
  keresProduct(id:any){
    if (id==null) {
      return -1
    }
    for (let index = 0; index < this.refProduct.length; index++) {
      const element = this.refProduct[index];
      if (element.id==id) {
        return index
      }
    }
    // this.refProduct.forEach((e:any) => {
    //   if (e.id==id) {
    //     return this.refProduct.index
    //   }
    // });
    return -1
  }

  // frissul(){
  //   this.refProduct
  // }

  addTetel(productv:any, del:boolean){
    let van=this.keresProduct(productv.id)
    let product
    // if (van>=0) {
    //     product=this.refProduct[this.keresProduct(productv.id)]
    //     console.log(typeof(product))
    //     console.log(product)
    // }else{

    // }

    let tetel=productv
    // refProduct.findIndex(
    //   (e:any)=> e.id==productv.id
    // )
    console.log(van)
    if (van>=0 && del) {
      this.refProduct.splice(van, 1)
      this.delProduct(this.url+"/"+van)
    }
    else if (van>=0) {
      // this.refProduct[van]=productv
      this.saveProduct(this.url+"/"+van)
    }
  // this.refProduct
    else {
      this.refProduct.push(productv)
      let len = this.refProduct.length()
      this.saveProduct(this.url+"/"+len)
    }
    // this.frissul()
    console.log(this.refProduct)
    this.saveProduct(this.url)
  }

  saveProduct(url:string){
    this.http.post(url,this.refProduct).subscribe((aaa)=>console.log(aaa))
  }
  delProduct(url:string){
    this.http.delete(url).subscribe((aaa)=>console.log(aaa))
  }
}
