import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: Product;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  addToCart(product: Product): void {
    this.cartService.addProduct(product.productId, 1).subscribe(
      {
        next: () => {},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['cart']);
        }
      }
    );
  }
}
