import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './componentes/create/create.component';
import { EditComponent } from './componentes/edit/edit.component';
import { ShowComponent } from './componentes/show/show.component';

const routes: Routes = [
  {path: '',component:ShowComponent},
  {path: 'create',component:CreateComponent},
  {path: 'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
