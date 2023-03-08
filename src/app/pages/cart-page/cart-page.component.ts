import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  loggedIn: boolean = this.userService.loggedIn;
  carts: Cart[] = [];
  products: Product[] = [];

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.findAllProducts().subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );

    this.cartService.getCart().subscribe(
      {
        next: (data) => {
          this.carts = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
