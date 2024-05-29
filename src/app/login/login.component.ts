// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Nếu đăng nhập thành công, điều hướng đến trang chính
      this.router.navigate(['/create']);
    } else {
      // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
      alert('Không trùng khớp');
    }
  }
}
