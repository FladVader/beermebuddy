import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import arrayShuffle from 'array-shuffle';
import { BtnName } from 'src/app/interfaces/btnName';
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
  @Input() newBtnName!: BtnName;
  @Output() previewed = new EventEmitter<string>();
  randoImgArray: RandomImg[] = [];
  randomIMG!: RandomImg;
  firstRandomImage!: SafeUrl;
  secondRandomImage!: SafeUrl;

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

    this.previewed.emit();
  }

  submitBtnName():void {
    this.dataService.postNewButtonName(this.newBtnName).subscribe(data => {
      for(var form of this.questionForm){
        form.reset()
        };
    });

    this.previewed.emit();
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

    this.previewed.emit();

  }


  private getRandomImages() {
    this.dataService.getRandomImages().subscribe((data) => {
      this.randoImgArray = data as RandomImg[];
      this.randoImgArray = arrayShuffle(this.randoImgArray)
      this.getNewRandomImage();
    });
  }

  private getNewRandomImage() {
    this.firstRandomImage = this.functionService.getRandoImg(this.randoImgArray);
    this.secondRandomImage = this.functionService.getRandoImg(this.randoImgArray);
  }

  ngOnInit(): void {
    this.getRandomImages()

  }


}
