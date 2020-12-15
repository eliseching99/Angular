import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  showMe:boolean=false
  ngOnInit(){

  }
  toggleTag(){
    this.showMe=!this.showMe;
  }

}
