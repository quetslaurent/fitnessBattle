import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './commons/not-found/not-found.component';
import {AppComponent} from './app.component';
import {FooterComponent} from './commons/footer/footer.component';
import {ConnectionComponent} from './connection/connection.component';

const routes : Routes = [
  {
    path:"connection",component:ConnectionComponent
  },
  {
    //on redirige vers auth si on mets rien apres le / , et le full est la pour check toute l'url
    path:'',redirectTo:"/connection",pathMatch:"full"
  },
  {
    //error 404 quand on tape n'importe quoi
    //l'ordre des routes a une importance , il faut le 404 a la fin sinon on aura toujours 404
    path: '**',component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  //declarations qui viennet de app module ts
  static components = [
    AppComponent,
    FooterComponent,
    NotFoundComponent
  ];
}
