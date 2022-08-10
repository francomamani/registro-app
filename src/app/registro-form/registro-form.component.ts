import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  public formGroup: FormGroup | undefined;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nombre_completo: [''],
      edad: [''],
      fecha_nacimiento: [''],
      fecha_inscripcion: [''],
      costo: [0],
    });
  }


}
