import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../servicios/servicio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup
  posRef: any
  constructor(

    public servicio: ServicioService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private Router: Router
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      raza: [''],
      nombrePropietario: [''],
      nombre: [''],
      especie: [''],
      edad: [''],
      sexo: ['']
    })

  }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.servicio.getPostById(id).subscribe(res => {
      this.posRef = res;
      this.editForm = this.formBuilder.group({
        id: [this.posRef.id],
        raza: [this.posRef.raza],
        nombrePropietario: [this.posRef.nombrePropietario],
        nombre: [this.posRef.nombre],
        especie: [this.posRef.especie],
        edad: [this.posRef.edad],
        sexo: [this.posRef.sexo]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.servicio.update(this.editForm.value, id)
    this.Router.navigate([''])
  }

}
