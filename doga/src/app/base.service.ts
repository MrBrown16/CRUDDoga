import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  prodUrl = "http://localhost:3000/products/"
  private refProduct:any = [];
  curProduct?:Product
  curIndex?:number
  constructor(private http: HttpClient, private router:Router) {
    this.getProducts().subscribe((adatok) =>{ 
      this.refProduct=adatok
      // console.log(typeof(adatok))
      // console.log(this.refProduct[0])
    })
  }
  reset(){
    this.curIndex=undefined
    this.curProduct=undefined
    this.router.navigate(['/products'])
  }
  setCurProduct(index: number) {
    // console.log(index)
    // let i = this.findProductIndex()
    // console.log(i)

    this.curProduct = this.refProduct[index]
    console.log(this.curProduct)
    // console.log(this.refProduct.at(index))
  }
  getCurProduct() {
    return this.curProduct
  }
  // findProductIndex(id:any) {
  //   console.log(id)
  //   return this.refProduct.findIndex(id)
  // }
  findProductIndex(id:any){
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
  addTetel(productv: any, del?: boolean) {
    let van = this.findProductIndex(productv.id)
    console.log("van: ",van," productv.id: ", productv.id, " del: ", del)
    if (van >= 0 && del) {
      this.deleteItem(productv.id).subscribe(()=>{
        console.log("why are you observable?")
        this.reset()
        this.refProduct.splice(van, 1)
        //TODO: refresh refProducts
      })
    } else if (van >= 0) {
      this.refProduct[van] = productv
      this.editItem(productv).subscribe(()=>console.log("fmeee"))
      this.reset()
    } else {
      this.refProduct.push(productv)
      // let len = this.refProduct.length
      console.log(productv)
      this.addItem(productv).subscribe({
        next:()=>{console.log("no really"),
        this.reset()},
        error:(e)=>console.log(e)
      })
    }
  }


  deleteItem(id: any) {
    return this.http.delete(this.prodUrl + id)
  }
  getItem(id: any) {
    return this.http.get(this.prodUrl + id)
  }

  addItem(product: any) {
    return this.http.post(this.prodUrl, product)
  }
  editItem(product: any) {
    return this.http.patch(this.prodUrl + product.id, product)
  }
  replaceItem(product: any) {
    return this.http.put(this.prodUrl + product.id, product)
  }




  getProducts() {
    return this.http.get(this.prodUrl)
  }
}
