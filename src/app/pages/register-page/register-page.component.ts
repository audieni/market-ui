import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  userInfo = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    country: new UntypedFormControl('')
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.userService.register(
      this.userInfo.get('email')?.value,
      this.userInfo.get('password')?.value,
      this.userInfo.get('country')?.value
    ).subscribe(
      {
        next: () => {
          console.log("Registered a new user.");
          console.log(this.userInfo);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(['login']);
        }
      }
    );
  }
}
