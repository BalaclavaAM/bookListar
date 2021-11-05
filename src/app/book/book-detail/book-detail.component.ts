import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from 'src/app/book/book-detail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail: BookDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.bookDetail.id);
  }

}
