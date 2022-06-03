import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { userStore } from 'app/shared/store';

@Injectable({
  providedIn: 'root'
})
export class RegularGuard implements CanActivate {
  userRole: any;
  constructor(
    private readonly router: Router
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = userStore.user.value;
    if (user && !user.org) {
      if (user.isSuperAdmin) {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/se-connecter');
      }
    }
    return Boolean(user && user.org);
  }
}
