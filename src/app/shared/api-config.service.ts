import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) {}

  //   private url = "http://souq.alishahin.net/api/";

  //  allItems(){
  //   return this.http.get( this.url + "Items")
  //  }

  //  specificItems(){
  //   return this.http.get( this.url + "Items/22")
  //  }
}
