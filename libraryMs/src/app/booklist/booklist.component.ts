import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { CommonService } from '../common.service';
import * as books from "../tempdb/books.json";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(public notificationService: NotificationsService, private commonService: CommonService) { }
  
  	book = [];
  	tabledata = [];
  	offset = 0;
	limit = 2;
	private totalItems: any[];
	pager: any = {};
	pagedItems: any[];
	start = true;


  ngOnInit() {
  	this.getBookData();
  }


  backBtn(){
  	window.history.back();
  }

  getBookData(){
  	this.book = (books as any).default.booksDetails;
  	this.totalItems = books.default.booksDetails.length;
  	if (this.start == true)this.setPage(1);
  }

  setPage(page: number) {
	this.start = false;
    this.pager = this.commonService.getPager(this.totalItems, page, this.limit);
	if(page > this.pager.endPage) page = this.pager.endPage;
	if(page < 1) page = 1;
    this.offset = (page - 1) * this.limit;
    this.tabledata = this.setDataForPage();
    console.log(this.tabledata);
	}

	setDataForPage(){
		var displayData = [];
		if(this.offset == 0){
			var start = this.offset;
			var end = this.limit+this.offset;
		} else{
			var start = this.offset;
			var end = this.limit+this.offset;
		}

		for(var i = start; i < end; i++){
			if(this.book[i] == undefined){
				break;
			} else{
				displayData.push(this.book[i]);
			}
		}
		return displayData;
	}
}
