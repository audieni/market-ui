import { Component } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  loggedIn: boolean = this.userService.loggedIn;
  orders: Order[] = [];

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.findOrders().subscribe(
      {
        next: (data) => {
          this.orders = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
