import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent {

  /*
   * Controla se o campo está aberto ou fechado
   */
  isOpen = false;

  /*
   * Controla exibição do campo, entre as opções:aberto/fechado
   */
  showHideField(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
