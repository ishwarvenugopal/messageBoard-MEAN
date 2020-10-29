
import { Component } from '@angular/core';
import { AuthService } from './auth-service';

@Component({
    selector: 'login',
    template: `
        <md-card>
            <md-input-container>
                <input mdInput [(ngModel)]="logInData.email" placeholder="Email" type="email">
            </md-input-container>
            <md-input-container>
                <input mdInput [(ngModel)]="logInData.password" placeholder="Password" type="password">
            </md-input-container>
            <button md-raise-button color="primary" (click)="login()">Login</button>
        </md-card>
    `
})
export class LoginComponent{
    constructor(private auth: AuthService){}

    logInData = {
        email: '',
        password: ''
    }
    login(){
        this.auth.login(this.logInData);
    }
}