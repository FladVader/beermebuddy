import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rule } from 'src/app/interfaces/rule';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
rules: Rule [] = [];

  constructor(public activeModal: NgbActiveModal, private dataService: DataServiceService) { }

  async getRules() {
  this.dataService.getRules().subscribe(data => {
      this.rules = data as Rule[];
      console.log(this.rules)
    })
  }

  ngOnInit(): void {

    this.getRules();
  }

}
