import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {
    const token = this.getToken();
    if (token) {
      this.updateToken(true);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(constants.CURRENT_TOKEN);
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  removeToken() {
    this.updateToken(false);
    localStorage.removeItem(constants.CURRENT_TOKEN);
  }
}
