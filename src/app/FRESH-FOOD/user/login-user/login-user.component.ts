import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      }
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.autoLogin(this.loginForm.value);
      window.sessionStorage.setItem('password', this.loginForm.get('password').value);
    }
  }
}
