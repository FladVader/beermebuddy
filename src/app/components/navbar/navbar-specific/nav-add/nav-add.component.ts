import { Component, OnInit } from '@angular/core';
import  {GlobalConstants} from 'src/assets/globals'

@Component({
  selector: 'app-nav-add',
  templateUrl: './nav-add.component.html',
  styleUrls: ['./nav-add.component.css']
})
export class NavAddComponent implements OnInit {

  title = GlobalConstants.title
  tag = GlobalConstants.tag

  constructor() { }

  ngOnInit(): void {
  }

}
