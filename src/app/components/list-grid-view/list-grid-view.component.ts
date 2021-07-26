import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-list-grid-view',
  templateUrl: './list-grid-view.component.html',
  styleUrls: ['./list-grid-view.component.scss']
})
export class ListGridViewComponent implements OnInit {
  @ContentChildren('listItem') listItems!: QueryList<{ view: string, class: string }>;
  view: 'list' | 'grid' = 'list';

  constructor() {
  }

  ngOnInit(): void {
  }

  viewList() {
    this.view = 'list';
    this.listItems.map((item) => item.view = this.view);
  }

  viewGrid() {
    this.view = 'grid';
    this.listItems.map((item) => item.view = this.view);
  }

}
