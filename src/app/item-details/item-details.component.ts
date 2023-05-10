import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from '../shared/api-config.service';
import { BasicElementService } from '../shared/basic-element.service';
import { ShoppingCardService } from '../shared/shopping-card.service';

declare var $: any;

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private iShared: ApiConfigService,
    private iService: BasicElementService,
    private shoppingCard: ShoppingCardService) { 
    }
  
    item: any;
    fullItem: any;
    newItems:  any;
    
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

    let id: any;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
      this.iService.getItemById(id).subscribe(data => this.item = data);

    });
    this.iService.getAllItems().subscribe(data => this.fullItem =  data);

    this.iService.newItems().subscribe(data => this.newItems = data);
    
  }
  addToCart()
  {
    this.shoppingCard.addItem(this.fullItem, 1);
    alert(this.shoppingCard.items.length)
  }
  

}
