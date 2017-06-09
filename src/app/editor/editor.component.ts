import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  detailToDisplay = "360-photos";
  constructor() { }

  ngOnInit() {
  }
  activateDetail(detail){
    this.detailToDisplay = detail;
  }

  currentFocus(detail){
    if (this.detailToDisplay == detail){
      return "selectedDetail";
    }
  }
}
