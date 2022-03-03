import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent {

  isOpen = false;

  showHideField(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
