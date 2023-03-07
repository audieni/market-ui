import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn: boolean = this.userService.loggedIn;
  user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.me().subscribe(
      {
        next: (data) => {
          this.user = data;
          this.user.password = null;
        }
      }
    )
  }

  logout():void {
    this.userService.logout();
    this.userService.loggedIn = false;
    this.router.navigate(['login']);
  }
}
