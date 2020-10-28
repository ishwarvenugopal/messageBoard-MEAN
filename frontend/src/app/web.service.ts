import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable()
export class WebService{
    
    base_url = 'http://localhost:3000/api';
    private messageStore;

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor( private http: HttpClient, private sb: MatSnackBar ){
        this.getMessages();
    }
    
    getMessages(user){
        user = (user) ? '/' + user : '';
        this.http.get(this.base_url + '/messages' + user).subscribe(response => {
            this.messageStore = response;    
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages")
        });
    }

    async postMessage(message){
        try {
            var response = await this.http.post(this.base_url + '/messages',message).toPromise();
            this.messageStore.push(response);    
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message")
        }       
    }

    private handleError(error){
        console.error(error)
        this.sb.open(error,"close",{duration:2000});
    }
}