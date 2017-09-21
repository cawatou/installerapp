import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let url = 'http://teledom.skipodev.ru/authmobile?login=' + username +'&password=' + password,
            headers = new Headers();
        headers.append('Content-Type', 'text/html; charset=UTF-8');
        headers.append('Access-Control-Allow-Origin', '*');

        let options = new RequestOptions({ headers: headers });

        return this.http.post(url);
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}