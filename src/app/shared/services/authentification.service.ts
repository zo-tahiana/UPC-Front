import { HttpClient } from '@angular/common/http';
import * as SecureLs from 'secure-ls';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { userStore } from 'app/shared/store';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  ls = new SecureLs({ isCompression: false });

  constructor(
    private http: HttpClient,
    private readonly router: Router
  ) {}

  get accessCode() {
    return this.ls.get('accessCode');
  }

  getToken() {
    return this.ls.get('token');
  }

  setToken(token: string) {
    this.ls.set('token', token);
  }

  logout() {
    this.ls.removeAll();
    return this.ls.clear();
  }

  async checkToken() {
    const token = this.getToken();
    if (token) {
      const url = `${environment.hosts.api}/account/verify-token`;
      const response: any = await firstValueFrom(this.http.post(url, { token }));
      if (response.user) userStore.user.next(response.user);
      if (response.ok) return { allowed: true };
      this.router.navigate(['/se-connecter']);
      return { allowed: false };
    } else {
      this.router.navigate(['/se-connecter']);
      return { allowed: false };
    }
  }
}
