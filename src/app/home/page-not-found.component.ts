import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pageTitle = 'Something is wrong!';
  constructor() {}

  ngOnInit() {}

  onBack() {
    window.history.back();
  }
}
