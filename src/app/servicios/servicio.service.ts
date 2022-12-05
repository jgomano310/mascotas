import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/Firestore';
import { MascotasInterfaz } from '../interfaces/mascotasInterfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private angularFirestore:AngularFirestore) { }


  getPost(){
    return this.angularFirestore
          .collection('post')
          .snapshotChanges()

  }

  getPostById(id:any){

    return this.angularFirestore
        .collection('post')
        .doc(id).valueChanges()
 
  }

  createPost(mascota:MascotasInterfaz){
    return new Promise<any> ( ( resolve, reject)=>{

      this.angularFirestore
            .collection('post').add(mascota)
            .then( (Response)=>{
              console.log(Response)
            },
            (error)=>{
              reject(error)
            })

    })
  }

update(mascota:MascotasInterfaz, id:any){
return this.angularFirestore
          .collection('post').doc(id).update(mascota);


}


delete(id:string){
  return this.angularFirestore.collection('post').doc(id).delete();
}




}
