import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id = +next.url[1].path;

    if (isNaN(id) || id < 1) {
      // in a real app, route to an error page and provide a button to navigate back
      alert("Invalid product Id");
      this.router.navigate(['/products']);

      return false;
    }

    return true;
  }
}
