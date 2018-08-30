import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatTooltipModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule { }
