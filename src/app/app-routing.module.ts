import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools/schools.component';
import { UsersComponent } from './users/users.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SchoolsModule } from './schools/schools.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  { path: 'schools', component: SchoolsComponent },
  {
    path: 'users', component: UsersComponent
  },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [SchoolsModule,
    UsersModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [
  // UsersComponent,
  PagenotfoundComponent
]