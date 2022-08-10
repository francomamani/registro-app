import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-table',
  templateUrl: './registro-table.component.html',
  styleUrls: ['./registro-table.component.css']
})
export class RegistroTableComponent implements OnInit {

  personas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
