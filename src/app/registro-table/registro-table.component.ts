import { Component, OnInit } from '@angular/core';
import {RegistroService} from "../services/registro.service";
import {IUser} from "../interfaces/user";

@Component({
  selector: 'app-registro-table',
  templateUrl: './registro-table.component.html',
  styleUrls: ['./registro-table.component.css']
})
export class RegistroTableComponent implements OnInit {

  users: IUser[] = [];

  constructor(public registroService: RegistroService) { }

  ngOnInit(): void {
    this.registroService.getUsers()
      .subscribe((users: any) => {
        this.users = users;
      })
  }

}
