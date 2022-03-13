import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent {
  /*
   *
   */
  @Input()
  icon!:string;
  /*
   *
   */
  @Input()
  title!:string;
  /*
   *
   */
  @Input()
  subtitle!:string;

  isOpen = true;
  hasFrame = true;

  closeModal():void{
    this.isOpen = false;
    setTimeout(() => {
      this.hasFrame = false;
    }, 700);
  }
}
