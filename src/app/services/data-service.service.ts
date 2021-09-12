import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, publishReplay, refCount, retry } from 'rxjs/operators';
import { NeverHave } from '../interfaces/neverHave';
import { Category } from '../interfaces/category';
import { RandomImg } from '../interfaces/randomImg';
import { Question } from '../interfaces/question';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/';

  getNever(): Observable<NeverHave[]> {
    var data  = this.http.get<NeverHave[]>(this.configUrl + "never");

    return data;
  };

  getAllQuestions(): Observable<any> {
    var data = this.http.get<any[]>(this.configUrl);

    return data;
  };

  getTypes(): Observable<Category[]> {
    var data = this.http.get<Category[]>(this.configUrl + "types")

    return data;
  };

  getRandomImages(): Observable<RandomImg[]> {

    return this.http.get<RandomImg[]>(this.configUrl + "randomimg")


  };


  postNewQuestion(newQuestion: Question): Observable <Question> {



    return this.http.post<Question>((this.configUrl + newQuestion.type), newQuestion).pipe(
      catchError(this.handleError)
    )
  }

  postRandomImage(newImage: RandomImg): Observable <RandomImg> {
    console.log("dataservice postrandimg")
    console.log(newImage)

     return this.http.post<RandomImg>((this.configUrl + "randomimg"), newImage).pipe(
      catchError(this.handleError)

     )};

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      console.log(error)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        console.log(error)

    }

    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

//     /** POST: add a new hero to the database */
// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }
  }

