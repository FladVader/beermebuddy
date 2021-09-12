import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import arrayShuffle from 'array-shuffle';
import { Question } from 'src/app/interfaces/question';
import { SafeUrl } from '@angular/platform-browser';
import { RandomImg } from 'src/app/interfaces/randomImg';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowQuestionComponent implements OnInit {
  questionsArray: any[] = [];
  currentQuestion!: Question;
  index = 0;

  currentImage!: SafeUrl;
  randoImgArray: RandomImg[] = [];

  constructor(
    private dataService: DataServiceService,
    private functionService: FunctionsService,

  ) {}

  getAll(): void {
    this.getAllQuestions();
    this.getRandomImages();
  }

  private getRandomImages() {
    this.dataService.getRandomImages().subscribe((data) => {
      this.randoImgArray = data as RandomImg[];
      this.randoImgArray = arrayShuffle(this.randoImgArray)


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
        if(!this.currentQuestion.img1){
        this.getNewRandomImage();
        }

    } else {
      this.index = 0;
    }

  }

  nextRandImg(): void {

    if(!this.currentQuestion.img2){
      this.getNewRandomImage();
      }
    }

  private getNewRandomImage() {
    this.currentImage = this.functionService.getRandoImg(this.randoImgArray);
  }

  ngOnInit(): void {
    this.getAll();

  }


}
