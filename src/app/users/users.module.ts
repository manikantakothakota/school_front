import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersroutes, UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { NumberFormatPipe } from '../custom/number-format.pipe';



@NgModule({
  declarations: [
    usersroutes,
    UsersComponent,
    NumberFormatPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
   
})
export class UsersModule { }
