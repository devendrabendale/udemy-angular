import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  itemList : any[] = [];
  newItem ="";

  constructor() { }

  ngOnInit(): void {
  }

  onNewItemClick()
  {
    this.itemList.push(this.newItem);
  }

}
