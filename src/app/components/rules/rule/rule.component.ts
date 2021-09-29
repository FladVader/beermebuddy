import { Component, Input, OnInit } from '@angular/core';
import { Rule } from 'src/app/interfaces/rule';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

@Input() rule!: Rule;

  constructor() { }

  ngOnInit(): void {
  }

}
