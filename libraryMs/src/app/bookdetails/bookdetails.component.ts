import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import * as books from '../tempdb/books.json';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(public notificationService: NotificationsService) { }

  ngOnInit() {
  	console.log(books);
  }

  backBtn(){
  	window.history.back();
  }

}