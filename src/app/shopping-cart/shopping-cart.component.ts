import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../shared/shopping-card.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: any = [];
  constructor(private shoppingCart: ShoppingCardService) { }

  ngOnInit(): void {
    this.items = this.shoppingCart.items
  }

}
