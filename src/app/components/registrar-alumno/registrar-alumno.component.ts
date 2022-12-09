import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  alumosForm: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get f() {
    return this.alumosForm.controls;
 }

 initializeForm() {


  this.alumosForm = this.fb.group({
    nombres: ['', Validators.required, Validators.maxLength(20), Validators.minLength(5) ],
    apellidos: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
    grado: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
    seccion: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
    direccion: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
    lugar_nacimiento: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
    correo: ['', Validators.required,  Validators.maxLength(20), Validators.minLength(6)],
  })
}


get Nombrenovalido() {
  return this.alumosForm.get('nombres')?.invalid && this.alumosForm.get('nombres')?.touched
}
get Apellidonovalido() {
  return this.alumosForm.get('apellidos')?.invalid && this.alumosForm.get('apellidos')?.touched
}


get Gradonovalido() {
  return this.alumosForm.get('grado')?.invalid && this.alumosForm.get('grado')?.touched
}

get Seccionnovalido() {
  return this.alumosForm.get('seccion')?.invalid && this.alumosForm.get('seccion')?.touched
}

get Direccionnovalido() {
  return this.alumosForm.get('direccion')?.invalid && this.alumosForm.get('direccion')?.touched
}
get Lugar_nacimiento_novalido() {
  return this.alumosForm.get('lugar_nacimiento')?.invalid && this.alumosForm.get('lugar_nacimiento')?.touched
}
get Correonovalido() {
  return this.alumosForm.get('correo')?.invalid && this.alumosForm.get('correo')?.touched
}
}
