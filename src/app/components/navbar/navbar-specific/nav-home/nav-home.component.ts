import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  title = GlobalConstants.title
  tag = GlobalConstants.tag
  constructor() { }

  ngOnInit(): void {
  }

}
