import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowQuestionComponent } from './components/show-question/show-question.component';
import { WelcomeComponent } from './components/show-question/type-components/welcome/welcome.component';
import { NeverComponent } from './components/show-question/type-components/never/never.component';
import { LikelyComponent } from './components/show-question/type-components/likely/likely.component';
import { IdiotComponent } from './components/show-question/type-components/idiot/idiot.component';
import { ShowAnswerComponent } from './components/show-question/type-components/show-answer/show-answer.component';
import { ShowStatementComponent } from './components/show-question/type-components/show-statement/show-statement.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FormsComponent } from './components/forms/forms.component';
import { NavHomeComponent } from './components/navbar/navbar-specific/nav-home/nav-home.component';
import { NavAddComponent } from './components/navbar/navbar-specific/nav-add/nav-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/forms/sub-forms/simple-form/simple-form.component';
import { PreviewAddComponent } from './components/add-question/preview-add/preview-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowQuestionComponent,
    WelcomeComponent,
    NeverComponent,
    LikelyComponent,
    IdiotComponent,
    ShowAnswerComponent,
    ShowStatementComponent,
    AddQuestionComponent,
    FormsComponent,
    NavHomeComponent,
    NavAddComponent,
    SimpleFormComponent,
    PreviewAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
