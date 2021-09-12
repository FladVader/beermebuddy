import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Question } from 'src/app/interfaces/question';
import { RandomImg } from 'src/app/interfaces/randomImg';
import { FunctionsService } from 'src/app/services/functions.service';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-show-statement',
  templateUrl: './show-statement.component.html',
  styleUrls: ['./show-statement.component.css']
})
export class ShowStatementComponent implements OnInit {

  @Input() Question!: Question;
  @Input() randomImg!: SafeUrl;
  neverHaveIMG = GlobalConstants.neverHaveIMG;
  mostLikelyIMG = GlobalConstants.mostLikelyIMG;




  constructor(private sanitizer: DomSanitizer, private functionService: FunctionsService) {


   }


   sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.functionService.sanitizeImageUrl(imageUrl)
 }

  ngOnInit(): void {




  }




}
