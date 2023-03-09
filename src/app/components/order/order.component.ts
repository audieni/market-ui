import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderProduct } from 'src/app/models/OrderProduct';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  loggedIn: boolean = this.userService.loggedIn;
  @Input()
  order!: Order;
  orderProducts: OrderProduct[] = [];
  count: number = 0;
  totalPrice: number = 0;

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.findProducts(this.order.orderId).subscribe(
      {
        next: (data) => {
          this.orderProducts = data;
          this.orderProducts.forEach((product) => {
            this.count++;
            this.totalPrice += product.productPrice;
          });
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
