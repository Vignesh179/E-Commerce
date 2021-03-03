import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    {id:1, productName:'OnePlus', qty:4, price: 400},
    {id:2, productName:'OnePlus', qty:5, price: 200},
    {id:3, productName:'OnePlus', qty:2, price: 300},
    {id:4, productName:'OnePlus', qty:3, price: 500},
  ];

  cartTotal = 0;
  constructor(private msg:MessengerService) { }

  ngOnInit(){

    this.msg.getMsg().subscribe(product =>{
      newFunction(product);
      this.cartItems.forEach(item =>{
        this.cartTotal+= item.qty * item.price;
      })
    })

  
  }

}
function newFunction(product: unknown) {
  console.log(product);
}

