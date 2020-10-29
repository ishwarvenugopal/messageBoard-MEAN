import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    base_url = 'http://localhost:3000/auth';
    name_key = 'name';
    token_key = 'token';

    constructor(private http: HttpClient, private router: Router){}
    
    get name() {
        return localStorage.getItem(this.name_key);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.token_key);
    }

    login(logInData){
        this.http.post<JSON>(this.base_url + '/login', logInData).subscribe(res => {
            this.authenticate(res);
        });
    }

    register(user){
        delete user.confirmPassword;
        this.http.post<JSON>(this.base_url + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }

    logout(){
        localStorage.removeItem(this.name_key);
        localStorage.removeItem(this.token_key);
    }

    authenticate(res){
        var authResponse = JSON.parse(JSON.stringify(res));
        if(!authResponse.token)
            return;
        
        localStorage.setItem(this.token_key, authResponse.token);
        localStorage.setItem(this.name_key, authResponse.firstName);
        this.router.navigate(['/']);
    }
}