import { HomeModule } from './home/index';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellphoneListModule } from './cellphone-list/index';
import { CellphoneListService } from './shared/index';
import { CellphoneDialogModule } from './cellphone-dialog/index';
import {
  MatInputModule, MatDialogModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    HomeModule,
    BrowserModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    CellphoneListModule,
    CellphoneDialogModule,
    LoginModule,
  ],
  declarations: [AppComponent],
  providers: [CellphoneListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
