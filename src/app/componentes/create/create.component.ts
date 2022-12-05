import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../servicios/servicio.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  public postForm:FormGroup


  constructor(
    public servicio:ServicioService,
    public formbuilder:FormBuilder,
    public router:Router
  ){
//inicializamos los cmapos 
    this.postForm=this.formbuilder.group({
      id: [''],
    raza:[''],
    nombrePropietario:[''],
    nombre:[''],
    especie:[''],
    edad:[''],
    sexo:['']
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.servicio.createPost(this.postForm.value)
    this.router.navigate([''])
  }
}
