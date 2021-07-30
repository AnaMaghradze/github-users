import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() search = new EventEmitter();
  lastSearches: string[] = [];
  searchText = '';

  ngOnInit(): void {
    this.lastSearches = JSON.parse(localStorage.getItem("lastSearches")!) || [];
  }

  onSearch(): void {
    if (this.searchText.trim()) {
      this.updateSearchHistory();
      this.search.emit(this.searchText);
    }
  }

  // if user clicks one of searched usernames, paste it in input field
  LastSearchedClicked(searchedText: string): void {
    this.searchText = searchedText;
    this.searchInput.nativeElement.focus();
  }

  // update array of last searches saved in localStorage
  updateSearchHistory(): void {
    if (this.lastSearches[this.lastSearches.length - 1] != this.searchText) {
      if (this.lastSearches.length >= 3) {
        this.lastSearches.shift();
      }
      this.lastSearches.push(this.searchText);
    }
    localStorage.setItem("lastSearches", JSON.stringify(this.lastSearches));
  }
}
