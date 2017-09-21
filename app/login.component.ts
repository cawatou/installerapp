import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
@Component({
    selector: 'login',
    templateUrl: './html/login.component.html'
})
export class LoginComponent implements OnInit {
    model:any = {};
    loading = false;
    error = '';

    constructor(private router:Router,
                private authService:AuthService) {
    }

    ngOnInit() {
        // reset login status
        this.authService.logout();
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                error => {
                    this.error = error; 
                    console.log(error)
                },
                result => {
                    var tt = result.json();
                    if (result === 1) {
                        this.router.navigate(['/']);
                    } else {
                        this.error = 'Логин или пароль неверные';
                        this.loading = false;
                    }
                }
            );
    }
}
