import{Component, Input} from '@angular/core';

@Component({
  selector: 'collapse',
  template: `
  <div (click) = 'toggleContent()' class ='well pointable'>
  <h2>{{title}}</h2></div>
  <ng-content *ngIf ="visible"></ng-content>       //To make content projection work

  `
})

export class CollapseComponent{
  @Input() title!: string;
  visible: boolean = true;
  toggleContent(){
  this.visible = !this.visible;
  }
}