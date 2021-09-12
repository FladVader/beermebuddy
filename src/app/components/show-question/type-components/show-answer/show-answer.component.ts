import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Question } from 'src/app/interfaces/question';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { GlobalConstants } from 'src/assets/globals';


@Component({
  selector: 'app-show-answer',
  templateUrl: './show-answer.component.html',
  styleUrls: ['./show-answer.component.css']
})
export class ShowAnswerComponent implements OnInit {
 @Input() Question?: Question;
 @Input() randomImg!: SafeUrl;
 @Output() viewedAnswer = new EventEmitter<String>();
 defaultIMG = GlobalConstants.welcomeIMG;

 imgUrl!: SafeUrl;


 constructor(private sanitizer: DomSanitizer, private functionService: FunctionsService) {


  }

  sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.functionService.sanitizeImageUrl(imageUrl)
}
  nextQuestion(): void {

    this.viewedAnswer.next()
  }


  ngOnInit(): void {

    this.imgUrl =   this.sanitizeImageUrl(this.Question?.img2)
  }

}
