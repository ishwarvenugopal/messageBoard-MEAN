import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http'
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [ 
    WebService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
