import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
  items: Array<any> = [];
  total: number = 0;
  constructor() { }
  addItem(item: any, qty: number)
  {
    for(let i=0; i<this.items.length;i++ ){
      if(this.items[i].ItemId===item.ItemId){
        this.items[i].qty+=1;
        alert(JSON.stringify(this.items))
        return;
      }
    }
  
    let myItem: any={
      ItemId:item.ItemId,
      ItemName:item.ItemName,
      SalesPrice:item.SalesPrice,
      ImageName:item.ImageName,
      Qty:qty,
      Total:item.SalesPrice*qty 
    }
    this.items.push(myItem);
    localStorage.setItem("Cart", JSON.stringify(this.items));
  }
  removeItem()
  {}
  clear()
  {}
}
