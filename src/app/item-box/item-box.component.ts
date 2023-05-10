import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {

  constructor() { }

  @Input() abdo: any;

  ngOnInit(): void {


    $(document).ready(function(){
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    })
  }

}
