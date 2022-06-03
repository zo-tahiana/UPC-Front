import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { userStore } from 'app/shared/store';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userRole: any;
  constructor(
    private readonly router: Router
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = userStore.user.value;
    if (user && !user.isSuperAdmin) {
      if (user.org) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/signin');
      }
    }
    return Boolean(user && user.isSuperAdmin);
  }
}
