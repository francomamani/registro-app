import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistroService} from "../services/registro.service";
import {Router} from "@angular/router";
import { DateTime } from 'luxon';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  public formGroup: FormGroup | undefined;
  constructor(public fb: FormBuilder,
              private router: Router,
              public registroService: RegistroService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      fecha_inscripcion: new FormControl('', Validators.required),
      edad: new FormControl(0, Validators.required),
      costo: new FormControl(0)
    });
  }

  public setEdad() {
    const edad = DateTime.fromJSDate(new Date(this.formGroup!!.value.fecha_nacimiento))
      .diffNow('years')
      .years;
    console.log(edad);
    this.formGroup!!.get('edad')!!.setValue(Math.abs(edad).toFixed(0));
  }
  public saveUser() {
    if(this.formGroup !== undefined) {
      if (this.formGroup.valid) {
        this.registroService.setUser(this.formGroup.value);
        this.router.navigate(['/']);
      }
    }
  }


}
