import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  viewAsList = true;
  viewAsGrid = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
