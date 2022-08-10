import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private base = environment.base;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.base}users`);
  }

  setUser(user: any) {
    return this.http.post(`${this.base}users`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.base}users/${id}`);
  }
}
