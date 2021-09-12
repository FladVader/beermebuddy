import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
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


  constructor(private sanitizer: DomSanitizer, private functionService: FunctionsService) {


   }

   sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.functionService.sanitizeImageUrl(imageUrl)
 }

  ngOnInit(): void {
  }

}
