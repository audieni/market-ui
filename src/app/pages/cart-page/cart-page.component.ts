import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Cart } from 'src/app/models/Cart';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  loggedIn: boolean = this.userService.loggedIn;
  carts: Cart[] = [];
  totalPrice: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.findCart().subscribe(
      {
        next: (data) => {
          this.carts = data;
          this.carts.forEach((cart) => {
            this.totalPrice += cart.productPrice;
          })
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  addOrder(): void {
    this.orderService.addOrder().subscribe(
      {
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['orders']);
        }
      }
    )
  }
}
