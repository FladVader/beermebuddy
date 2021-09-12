import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ShowQuestionComponent } from './components/show-question/show-question.component';

const routes: Routes = [
  {path: 'add', component: AddQuestionComponent},
  {path: '', component: ShowQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


