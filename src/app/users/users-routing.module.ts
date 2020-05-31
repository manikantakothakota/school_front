import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      { path: 'adduser', component: AddUserComponent },
      { path: 'listuser', component: ListUserComponent },
      { path: 'edituser/:id', component: EditUserComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
export const usersroutes = [
  AddUserComponent,
  ListUserComponent,
  EditUserComponent
]
