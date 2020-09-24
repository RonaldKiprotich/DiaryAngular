import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { CreateDiaryComponent } from './create-diary/create-diary.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    CreateDiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
