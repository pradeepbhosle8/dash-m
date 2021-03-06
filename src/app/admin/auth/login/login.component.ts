import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../classes/users';
import { AuthserviceService } from '../../services/authservice.service';
import { NotificationService } from 'src/app/admin/services/notification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthserviceService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  isLoggedIn = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.setLoginValidation();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    var token = localStorage.getItem('loggedInUser');
    console.log(token)
    if (!token) {
      this.router.navigate(['/login'], { relativeTo: this.route })
    } else if (token) {
      this.router.navigate(['/msociety/dashboard'], { relativeTo: this.route })
    }


  }

  // validation form
  setLoginValidation() {
    this.loginForm = this.fb.group({
      // email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  get f() { return this.loginForm.controls; }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.loginForm.controls;
  // }

  onLoginSubmit() {
//  console.log('Working')
console.log(this.f.username.value);
console.log(this.f.password.value);
const { username, password } = this.loginForm.value;
console.log(username, password);
this.authService.loginUser(username, password)
.subscribe(
  (res) => {
    console.log(res);
          this.notification.showSuccess('', 'Sucessfully Login')
          this.router.navigate(['/msociety/dashboard'], { relativeTo: this.route })
  }, error => {
    this.notification.showError('Wrong', 'Username and password incorrect');
    this.loginForm.reset();
  }
)

  }

}
