import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.css']
})
export class CreateDiaryComponent implements OnInit {

  newDiary = new Diary(0,"","",new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
