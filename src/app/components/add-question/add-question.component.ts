import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  typesArray: Category[] = [];
  constructor(private dataService: DataServiceService) { }

  getTypes(): void {

   this.dataService.getTypes().subscribe(data =>

   this.typesArray = data);


  }

  ngOnInit(): void {

    this.getTypes();


  }

}
