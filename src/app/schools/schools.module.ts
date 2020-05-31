import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsRoutingModule } from './schools-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatePipe } from '../custom/customdatepipe.datepipe';
import { AddschoolComponent } from './addschool/addschool.component';
import { EditschoolComponent } from './editschool/editschool.component';
import { ListschoolComponent } from './listschool/listschool.component';
import { SchoolsComponent } from './schools.component';

@NgModule({
  declarations: [
    CustomDatePipe,
    AddschoolComponent,
    EditschoolComponent,
    ListschoolComponent,
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class SchoolsModule { }
