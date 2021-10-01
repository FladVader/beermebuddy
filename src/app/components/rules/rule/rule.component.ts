import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rule } from 'src/app/interfaces/rule';
import { RulesModalComponent } from '../../modals/rules-modal/rules-modal.component';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

@Input() rule!: Rule;

  constructor(private modalService: NgbModal) { }

  openRule(){
    const modalRef = this.modalService.open(RulesModalComponent, { centered: true })

    modalRef.componentInstance.rule = this.rule;
  }

  ngOnInit(): void {
  }

}
