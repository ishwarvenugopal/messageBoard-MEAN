import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component';
import { MessagesComponent } from './messages.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'messages/:name',
    component: MessagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
