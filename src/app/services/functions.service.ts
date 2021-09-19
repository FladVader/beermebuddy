import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import arrayShuffle from 'array-shuffle';
import { RandomImg } from '../interfaces/randomImg';

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  currentImage!: SafeUrl;
  next: number = 0;
  imgIndex = 1;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  getRandoImg(imgArray: RandomImg[]) {

    // this.currentImage = this.sanitizeImageUrl(
    //   imgArray[Math.floor(Math.random() * max)].url
    // );
    if(this.imgIndex < imgArray.length){

      this.currentImage = this.sanitizeImageUrl(imgArray[this.imgIndex].url)
      this.imgIndex++;
    } else {
      this.imgIndex = 1;
      this.currentImage = this.sanitizeImageUrl(imgArray[this.imgIndex].url)
    }

    return this.currentImage;
  }

  shuffleArrays(arrays: []) {
    var shuffledArrays = [];
    for (var array of arrays) {
      var shuffled = arrayShuffle(array);
      shuffledArrays.push(shuffled);
    }
    console.log(shuffledArrays)
    return shuffledArrays;
  }
}
