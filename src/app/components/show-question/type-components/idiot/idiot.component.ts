import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Question } from 'src/app/interfaces/question';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ShowQuestionComponent } from '../../show-question.component';


@Component({
  selector: 'app-idiot',
  templateUrl: './idiot.component.html',
  styleUrls: ['./idiot.component.css']
})

export class IdiotComponent implements OnInit {
  @Input() Question?: Question;






  imgUrl!: SafeUrl;


  constructor(private sanitizer: DomSanitizer, private dataService: DataServiceService) {


   }

   sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}



  ngOnInit(): void {

  this.imgUrl =   this.sanitizeImageUrl(this.Question!.img1)


  }

}
