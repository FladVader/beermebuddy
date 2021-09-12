import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-likely',
  templateUrl: './likely.component.html',
  styleUrls: ['./likely.component.css'],
})
export class LikelyComponent implements OnInit {
  @Input() Question?: Question;
  mostLikelyIMG = GlobalConstants.mostLikelyIMG;
  constructor() {}

  ngOnInit(): void {}
}
