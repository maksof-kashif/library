import { Component, OnInit } from '@angular/core';

import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public notificationService: NotificationsService) { }

  ngOnInit() {  	
  }

  redirectToBookList(){
  	window.location.href='/book-list'; 
  }
  redirectToBookDetails(){
  	window.location.href='/book-details'; 
  }

}
