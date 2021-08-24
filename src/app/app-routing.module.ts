import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MesaComponent } from './mesa/mesa.component';

const routes: Routes = [
  {
    path:"",
    component:MenuComponent,
    pathMatch:'full'
  },
  {
    path:"mesa",
    component:MesaComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
