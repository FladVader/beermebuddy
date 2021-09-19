import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import arrayShuffle from 'array-shuffle';
import { Question } from 'src/app/interfaces/question';
import { SafeUrl } from '@angular/platform-browser';
import { RandomImg } from 'src/app/interfaces/randomImg';
import { FunctionsService } from 'src/app/services/functions.service';

import { BtnName } from 'src/app/interfaces/btnName';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowQuestionComponent implements OnInit {
  questionsArray: any[] = [];
  currentQuestion!: Question;
  btnNames: BtnName[] = [];
  index = 0;
  btnIndex = 0;
  btnName: BtnName = { id: 0, name: 'Nu åker vi!' };
  globalAny: any = GlobalConstants;
  currentImage!: SafeUrl;
  randoImgArray: RandomImg[] = [];

  constructor(
    private dataService: DataServiceService,
    private functionService: FunctionsService
  ) {}

  private getAll(): void {
    this.getAllQuestions();
    this.getRandomImages();
    this.getButtonNames();
  }

  private getRandomImages() {
    this.dataService.getRandomImages().subscribe((data) => {
      this.randoImgArray = data as RandomImg[];
      this.randoImgArray = arrayShuffle(this.randoImgArray);
    });
  }

  private getNewRandomImage() {
    this.currentImage = this.functionService.getRandoImg(this.randoImgArray);
  }

  private getButtonNames() {
    this.dataService.getButtonNames().subscribe((data) => {
      this.btnNames = arrayShuffle(data as BtnName[]);
    });
  }

  private getAllQuestions() {
    this.dataService.getAllQuestions().subscribe((data) => {
      var lengths = [];
      var numberOfArrays = data.length;
      for (var i = 0; i < numberOfArrays; i++) {
        lengths.push(data[i].length);
      }

      var maxLength = Math.max(...lengths);

      var shuffledArrays = this.functionService.shuffleArrays(data);

      for (var i = 0; i < maxLength; i++) {
        for (var j = 0; j < numberOfArrays; j++) {
          if (shuffledArrays[j][i]) {
            this.questionsArray.push(shuffledArrays[j][i]);
          }
        }
      }
      console.log(this.questionsArray.length);
    });
  }

  next(): void {
    if (this.questionsArray[this.index]) {
      this.currentQuestion = this.questionsArray[this.index];
      this.index++;
      if (!this.currentQuestion.img1) {
        this.getNewRandomImage();
      }
    } else {
      this.index = 0;
    }

    if (this.btnNames[this.btnIndex]) {
      if (!this.currentQuestion.answer) {
        this.btnName = this.btnNames[this.btnIndex];
        this.btnIndex++;
      }
    } else {
      this.btnIndex = 0;
    }
  }

  nextRandImg(): void {
    if (!this.currentQuestion.img2) {
      this.getNewRandomImage();
    }
  }

  ngOnInit(): void {
    this.btnName.name = 'Nu kör vi';
    this.getAll();
  }
}
