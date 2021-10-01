import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Rule } from 'src/app/interfaces/rule';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-rules-modal',
  templateUrl: './rules-modal.component.html',
  styleUrls: ['./rules-modal.component.css']
})
export class RulesModalComponent implements OnInit {

  @Input() rule?: Rule;

  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {





  }



}
