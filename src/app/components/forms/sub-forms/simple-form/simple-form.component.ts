import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
@Input() selectedType!: number;
@Input() questionForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
