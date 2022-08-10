import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegistroService} from "../services/registro.service";
import {Router} from "@angular/router";

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
      nombre_completo: [''],
      edad: [''],
      fecha_nacimiento: [''],
      fecha_inscripcion: [''],
      costo: [0],
    });
  }

  public saveUser() {
    if(this.formGroup !== undefined) {
      this.registroService.setUser(this.formGroup.value);
      this.router.navigate(['/']);
    }
  }


}
