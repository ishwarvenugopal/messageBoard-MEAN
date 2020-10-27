import { Component, EventEmitter, Output } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <md-input-container>
                <input [(ngModel)]="message.owner" mdInput placeholder="Name: ">
            </md-input-container>
            <md-input-container>
                <textarea [(ngModel)]="message.text" mdInput placeholder="Message: "></textarea>
            </md-input-container>
            <md-card-actions>
                <button (click)="post()" md-button color='primary'>POST</button>
            </md-card-actions>
        </mat-card-content>
    </mat-card>
    `
})
export class NewMessageComponent {
  
    constructor(private webService: WebService){}

    message = {
        owner: "",
        text: ""
    }
    
    post(){
        this.webService.postMessage(this.message);
    }
}