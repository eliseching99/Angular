import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testinput',
  templateUrl: './testinput.component.html',
  styleUrls: ['./testinput.component.css']
})
export class TestinputComponent implements OnInit {
  @Input() testinput: any;
  constructor() { }

  ngOnInit(): void {
  }

}
