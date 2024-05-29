// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any; // Thông tin người dùng hiện tại

  constructor() { }

  // Phương thức đăng nhập
  login(username: string, password: string): boolean {

    if (username === 'teamleader' && password === 'password1') {
      this.currentUser = { username: username, role: 'teamLeader' };
      return true;
    } else if (username === 'employee' && password === 'password2') {
      this.currentUser = { username: username, role: 'employee' };
      return true;
    }
    return false;
  }


  logout(): void {
    this.currentUser = null;
  }


  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
  getCurrentUser(): any {
    return this.currentUser;
  }

  isTeamLeader(): boolean {
    return this.currentUser && this.currentUser.role === 'teamLeader';
  }

  isEmployee(): boolean {
    return this.currentUser && this.currentUser.role === 'employee';
  }
}
