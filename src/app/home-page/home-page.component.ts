import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiConfigService } from '../shared/api-config.service';
import { BasicElementService } from '../shared/basic-element.service';

declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // dataob: Subscription;
  constructor(private iService: BasicElementService) { 
    // this.dataob =  this.allItemsData.allItems().subscribe(data => this.itemexported = data)
  }
  newItems: Array<any> = [];
  popularItems: Array<any> = [];
  allItems: Array<any> = [];

  ngOnInit(): void {

    $(document).ready(function(){
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });

    this.iService.newItems().subscribe(data => {
      this.newItems = data
    });
    this.iService.getPopularItem().subscribe(data => {
      this.popularItems = data
    });
    this.iService.getAllItems().subscribe(data => {
      this.allItems = data
    })

    // this.itemexported = this.data.centerData();

  }

  // ngOnDestroy(){
  //   this.dataob.unsubscribe();
  // }

  

}
