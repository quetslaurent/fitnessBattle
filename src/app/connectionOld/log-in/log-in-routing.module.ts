import { NgModule } from '@angular/core';
import {LogInComponent} from './log-in.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {

  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class LogInRoutingModule {
  static components = [
    LogInComponent
  ];
}
