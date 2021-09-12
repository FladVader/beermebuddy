import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-never',
  templateUrl: './never.component.html',
  styleUrls: ['./never.component.css']
})
export class NeverComponent implements OnInit {

  @Input() Question?: Question;
  neverHaveIMG = GlobalConstants.neverHaveIMG;

  constructor() { }

  ngOnInit(): void {
  }

}
