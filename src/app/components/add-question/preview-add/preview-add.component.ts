import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Question } from 'src/app/interfaces/question';
import { RandomImg } from 'src/app/interfaces/randomImg';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-preview-add',
  templateUrl: './preview-add.component.html',
  styleUrls: ['./preview-add.component.css'],
})
export class PreviewAddComponent implements OnInit {
  @Input() newImg!: RandomImg;
  @Input() newQuestion!: Question;
  @Input() questionForm!: FormGroup [];
  randoImgArray: RandomImg[] = [];
  randomIMG!: RandomImg;

  constructor(private functionService: FunctionsService, private dataService: DataServiceService) {}

  sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.functionService.sanitizeImageUrl(imageUrl);
  }


  submitImg():void {


    this.dataService.postRandomImage(this.newImg).subscribe(data => {
      for(var form of this.questionForm){
        form.reset()
        };
    });
  }

  submitQuestion(): void {

    this.dataService.postNewQuestion(this.newQuestion).subscribe(data => {

      for(var form of this.questionForm){
      form.reset()
      };

      console.log("Lägger till: ")
      console.log(data)
      alert("Fråga tillagd")
    })
  }


  private getRandomImages() {
    this.dataService.getRandomImages().subscribe((data) => {
      this.randoImgArray = data as RandomImg[];
    });


  }



  ngOnInit(): void {
    this.getRandomImages()
  }


}
