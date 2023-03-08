import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  loggedIn: boolean = this.userService.loggedIn;
  products: Product[] = [];

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router
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
  }
}
