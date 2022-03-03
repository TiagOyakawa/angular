import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  /*
   * Recebe o nome que será exibido no botão
   */
  @Input()
  title!:string;

  /*
   * Recebe a cor do botão
   */
  @Input()
  color='default';

  /*
   * Retorna a classe, conforme a cor desejada
   */
  setBackground(color:string): string{
    if (color=='danger'){
      return 'button--red';
    } else if (color=='success'){
      return 'button--green';
    }
    return 'button--blue';
  }
}
