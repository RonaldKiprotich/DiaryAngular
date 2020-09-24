import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
diaries: Diary[]=[
  new Diary(1,'coding','building an application using angular', new Date(2020,6,20)),
  new Diary(2,'Reading','i will be reading a book called everything is fucked up', new Date(2020,6,20)),
  new Diary(3,'playing','playing pool games and cards', new Date(2020,6,20))
]
  constructor() { }

  ngOnInit(): void {
  }

}
