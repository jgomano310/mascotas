import { Component, OnInit } from '@angular/core';
import { map } from '@firebase/util';
import { MascotasInterfaz } from 'src/app/interfaces/mascotasInterfaz';
import { ServicioService } from 'src/app/servicios/servicio.service';




@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Mascotas: MascotasInterfaz[] = [];
  constructor(private servicio:ServicioService ){}

  ngOnInit(): void {

    /* this.servicio.getPost().subscribe( (res)=>{
        this.Mascota =res.map( (e) =>{
            return{
               
              ...(e.payload.doc.data() as MascotasInterfaz),

              id: e.payload.doc.id

            };
        });
    }); */
      this.servicio.getPost().subscribe(
        (resp: any) => {
          this.Mascotas = [];
          resp.forEach( (mascota: any) => {
            this.Mascotas.push({
              documentId: mascota.payload.doc.id,
              ...mascota.payload.doc.data()
            })
            //this.Mascotas.push(mascota.payload.doc.data());
          });
        }
      )
    }


    deleteRecord(id: string) {
      
      this.servicio.delete(id).then(
        () =>{
          console.log("hola");
        }, (error)=>{
          console.error(error);
        }

      );
    } 
  }


