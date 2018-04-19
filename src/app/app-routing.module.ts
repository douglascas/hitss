import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneListComponent } from './cellphone-list/index';

// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes: Routes = [
  { path: '', component: CellphoneListComponent },
  // { path: '', component: CellphoneListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
