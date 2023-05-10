import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class BasicElementService implements OnInit{

  constructor(private http: HttpClient) { }

  
  getPopularItem(): Observable<Array<any>>{
    return this.http.get<Array<any>>('http://souq.alishahin.net/api/Items/PopularItems')
   }

  ngOnInit(): void {}
  getAllItems (): Observable<Array<any>>{

    return this.http.get<Array<any>>('http://souq.alishahin.net/api/Items')

  }
  newItems (): Observable<Array<any>>{

    return this.http.get<Array<any>>('http://souq.alishahin.net/api/Items/NewItems')

  }
  getItemById(id: Number): Observable<any>{
    return this.http.get<any>('http://souq.alishahin.net/api/Items/'+id)

  }


}
