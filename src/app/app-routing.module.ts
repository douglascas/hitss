import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneListComponent } from './cellphone-list/index';
import { CellphoneDetailComponent } from './cellphone-list/cellphone-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CellphoneListComponent,
  },
  {
    path: 'detail/:code',
    component: CellphoneDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
