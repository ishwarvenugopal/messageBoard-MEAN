import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class WebService{
    
    base_url = 'http://localhost:3000/api';
    messages;

    constructor( private http: HttpClient, private sb: MatSnackBar ){
        this.getMessages();
    }
    
    async getMessages(){
        try {
            var response = await this.http.get(this.base_url + '/messages').toPromise();
            this.messages = response;    
        } catch (error) {
            this.handleError("Unable to get messages")
        }
        
    }

    async postMessage(message){
        try {
            var response = await this.http.post(this.base_url + '/messages',message).toPromise();
            this.messages.push(response);    
        } catch (error) {
            this.handleError("Unable to post message")
        }       
    }

    private handleError(error){
        console.error(error)
        this.sb.open(error,"close",{duration:2000});
    }
}