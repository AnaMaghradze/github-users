import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../shared/models/user.interface";
import {GhUserService} from "../../shared/services/gh-user.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() onSearch = new EventEmitter();
  lastSearches: string[] = [];
  searchText = '';

  constructor() {
  }

  ngOnInit(): void {
    this.lastSearches = JSON.parse(localStorage.getItem("lastSearches")!) || [];
  }

  search() {
    if (this.searchText.trim()) {
      this.updateSearchHistory();
      this.onSearch.emit(this.searchText);
    }
  }

  LastSearchedClicked(searchedText: string) {
    this.searchText = searchedText;
    this.searchInput.nativeElement.focus();
  }

  updateSearchHistory() {
    if (this.lastSearches.length >= 3) {
      this.lastSearches.shift();
    }
    if (this.lastSearches[1] != this.searchText) {
      this.lastSearches.push(this.searchText);
    }
    localStorage.setItem("lastSearches", JSON.stringify(this.lastSearches));
  }
}
