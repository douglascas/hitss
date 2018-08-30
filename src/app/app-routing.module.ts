import { HomeComponent } from './home/index';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneDetailComponent, CellphoneListComponent } from './cellphone-list/index';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'galery',
    component: CellphoneListComponent,
  },
  {
    path: 'detail/:code',
    component: CellphoneDetailComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
