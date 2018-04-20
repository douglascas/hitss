import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellphoneListModule } from './cellphone-list/index';
import { CellphoneListService } from './shared/index';
import { CellphoneDialogModule } from './cellphone-dialog/index';
import { MatInputModule, MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CellphoneListModule,
    CellphoneDialogModule,
  ],
  declarations: [ AppComponent ],
  providers: [ CellphoneListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
