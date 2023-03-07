import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userInfo = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  });

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(): void {
    this.userService.login(
      this.userInfo.get('email')?.value,
      this.userInfo.get('password')?.value
    ).subscribe(
      {
        next: () => {
          this.userService.loggedIn = true;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['home']);
        }
      }
    );
  }
}
