import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [{ name: "ali", type: 'dev' }, { name: "Hasnain", type: 'dev' }, { name: "umer", type: 'designer' }, { name: "usman", type: 'dev' },]

}
