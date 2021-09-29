import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RulesComponent } from 'src/app/components/rules/rules.component';
import { Rule } from 'src/app/interfaces/rule';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { GlobalConstants } from 'src/assets/globals';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  imgUrl!: SafeUrl;
  welcomeIMG = GlobalConstants.welcomeIMG;
  rules: Rule [] = [];


  constructor(private functionService: FunctionsService, private dataService: DataServiceService, private modalService: NgbModal) {


   }

   open() {
    this.modalService.open(RulesComponent)
  }



   sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.functionService.sanitizeImageUrl(imageUrl)
 }

  ngOnInit(): void {


  }

}
