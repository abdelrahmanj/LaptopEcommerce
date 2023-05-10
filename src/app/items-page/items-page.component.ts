import { Component, OnInit } from '@angular/core';
import { BasicElementService } from '../shared/basic-element.service';

declare var $: any;
@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private iService: BasicElementService) { }
  itemsAll: Array<any> = []
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

    this.iService.getAllItems().subscribe(data => this.itemsAll = data)
  }

}
