import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './app-tag.component.html',
  styleUrls: ['./app-tag.component.scss']
})
export class AppTagComponent {
  /*
   * Recebe o nome da caixa de texto
   */
  @Input()
  text!:string;
  /*
   * Recebe a cor das caixas de texto
   */
  @Input()
  color='default';

  setBackground(color:string): string{
    if (color=='danger'){
      return 'tag--red';
    } else if (color=='success'){
      return 'tag--green';
    } else if (color=='disabled'){
      return 'tag--grey';
    } else if (color=='cancelled'){
      return 'tag--black';
    }
    return 'tag--blue';
  }
}
