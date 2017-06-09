import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  detailToDisplay = "360-photos";
  constructor(private route: ActivatedRoute) { }

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
