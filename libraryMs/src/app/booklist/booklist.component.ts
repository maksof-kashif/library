import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import * as books from '../tempdb/books.json';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(public notificationService: NotificationsService) { }

  ngOnInit() {
  	console.log(books);
  }


  backBtn(){
  	window.history.back();
  }
}
