import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectionComponent} from './connection.component';

const routes: Routes = [
  {
    path:'connection',component:ConnectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule {
  static components = [
    ConnectionComponent
  ];
}
