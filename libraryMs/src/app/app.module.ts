import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
