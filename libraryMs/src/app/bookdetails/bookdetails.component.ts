import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { CommonService } from '../common.service';
import * as books from '../tempdb/books.json';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(public notificationService: NotificationsService, private commonService: CommonService) { }

  book = [];
  backupPageNo; 
  tabledata = [];
  offset = 0;
  limit = 5;
  private totalItems: any[];
  pager: any = {};
  pagedItems: any[];
  start = true;
  editField: boolean = false;
  canEdit;

  ngOnInit() {
    this.getBookData();
  }

  backBtn(){
  	window.history.back();
  }

  getBookData(){
    if(localStorage.getItem('bookData') == null){
      localStorage.setItem('bookData',JSON.stringify((books as any).default.booksDetails));
      this.book = JSON.parse(localStorage.getItem('bookData'));
    } else{
      this.book = JSON.parse(localStorage.getItem('bookData'));
    }
    this.book.sort(this.sortArr);
    this.totalItems = books.default.booksDetails.length;
    if (this.start == true)this.setPage(1);
  }

  setPage(page: number) {
    this.backupPageNo = page;
    this.start = false;
    this.pager = this.commonService.getPager(this.totalItems, page, this.limit);
    if(page > this.pager.endPage) page = this.pager.endPage;
    if(page < 1) page = 1;
    this.offset = (page - 1) * this.limit;
    this.tabledata = this.setDataForPage();
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

  sortArr(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

  EditBookDetails(row){
    this.editField = true;
    this.canEdit = row;
  }

  SaveEditBookDetails(row){
    localStorage.setItem('bookData',JSON.stringify(this.book));
    this.editField = false;
    this.canEdit = row+1;
  }

  CancelEditBookDetails(row){
    this.book = JSON.parse(localStorage.getItem('bookData'));
    this.setPage(this.backupPageNo);
    this.canEdit = row+1;
  }   

}