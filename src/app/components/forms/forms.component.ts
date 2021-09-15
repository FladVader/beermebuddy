import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Question } from 'src/app/interfaces/question';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RandomImg } from 'src/app/interfaces/randomImg';
import { SelectedType } from 'src/app/interfaces/selectedType';
import { BtnName } from 'src/app/interfaces/btnName';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  // To kill "NG0100: Expression has changed after it was checked"
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent implements OnInit {
  selectedType!: number;
  selectedTypeName!: String;
  selectedSimple!: boolean;
  selectedCategory!: Category

  @Input() required!: boolean;
  @Input() requiredImg!: boolean;
  @Input() requiredAnswer!: boolean;
  @Input() types: Category[] = [];
  @Input() ngValue: any;
  @Input() simple!: boolean;
  newImg!: RandomImg;
  newQuestion!: Question;
  newBtnName!: BtnName;

  questionForm = new FormGroup({
    statement: new FormControl(),
    answer: new FormControl(),
    img1: new FormControl(),
    img2: new FormControl(),
    type: new FormControl(),
    name: new FormControl(),
  });

  simpleQuestionForm = new FormGroup({
    statement: new FormControl(),
    img1: new FormControl(),
    type: new FormControl(),
    name: new FormControl(),
  });

  imageForm = new FormGroup({
    url: new FormControl(),
    type: new FormControl(),
  });

  btnForm = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),

  });

  constructor(
    private dataService: DataServiceService,
    private cdRef: ChangeDetectorRef
  ) {}

  //event handler for the select element's change event
  selectChangeHandler(event: any) {

    //update the ui
    console.log(this.selectedCategory);

    // switch (this.selectedCategory.simple) {
    //   case true: {

    //     this.requiredAnswer = false;
    //     this.requiredImg = false;

    //     if(this.selectedCategory.id == 5){
    //     this.required = false;
    //     this.requiredImg = true;
    //     }else {
    //       this.required = true;
    //     }
    //     break;
    //   }

    //   case false: {
    //     if(this.selectedCategory.id == 4){
    //       this.required = false;
    //       this.requiredAnswer = true;
    //     }
    //     this.required = true;
    //     break;
    //   }

    // }
  }

  onSubmit(): void {
    console.log(this.questionForm.value);
    this.newQuestion = this.questionForm.value;

  }

  onSubmitImage(): void {
    this.newImg = this.imageForm.value;
  }

  onSubmitBtnName(): void {
    this.newBtnName = this.btnForm.value;
  }

  resetSelectedCategory(): void {
    this.selectedCategory = {
      id: 0,
      name: 'Välj en kategori',
      simple: true,
    };

  }


  ngOnInit(): void {

    this.selectedCategory = {
      id: 0,
      name: 'Välj en kategori',
      simple: true,
    };
  }
}
