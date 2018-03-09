import { Injectable }                                                       from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }                                                      from "./services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.auth.login()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;

        /*if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;*/
    }
}