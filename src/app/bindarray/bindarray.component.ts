import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindarray',
  templateUrl: './bindarray.component.html',
  styleUrls: ['./bindarray.component.css']
})
export class BindarrayComponent {

  title="bind_demo"
  material=["Pen","pencil","eraser","jhope","Suga"];
  mymat=this.material[3];

}
