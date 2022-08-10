import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroTableComponent} from "./registro-table/registro-table.component";
import {RegistroFormComponent} from "./registro-form/registro-form.component";

const routes: Routes = [
  {
    path: '',
    component: RegistroTableComponent,
    children: [
      {
        path: 'form',
        component: RegistroFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
