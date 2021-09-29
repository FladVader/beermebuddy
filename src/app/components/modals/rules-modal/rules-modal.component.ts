import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Rule } from 'src/app/interfaces/rule';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.css']
})
export class RulesModalComponent implements OnInit {

  rules: Rule[] = [];

  constructor(private dataService: DataServiceService) { }

  getRules() {
    this.dataService.getRules().subscribe(data => {
      this.rules = data as Rule[];
      console.log(this.rules)
    })
  }

  ngOnInit(): void {

    this.getRules()



  }



}
