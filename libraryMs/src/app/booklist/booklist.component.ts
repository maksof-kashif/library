import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {NotificationsService } from 'angular2-notifications';
import bookDetails from '../tempdb/books.json';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private sharedService : SharedService, public notificationService: NotificationsService) { }

  ngOnInit() {
  	console.log(bookDetails);
  }

  backBtn(){
  	window.history.back();
  }


}
