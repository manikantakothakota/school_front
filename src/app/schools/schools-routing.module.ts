import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { ListschoolComponent } from './listschool/listschool.component';
import { EditschoolComponent } from './editschool/editschool.component';


const routes: Routes = [
    {
        path: 'schools', component: SchoolsComponent, children:
            [{ path: 'addschool', component: AddschoolComponent },
            { path: 'listschool', component: ListschoolComponent },
            { path: 'editschool/:id', component: EditschoolComponent }]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class SchoolsRoutingModule { }
// export const schoolsroutes = [
//     AddschoolComponent,
//     ListschoolComponent,
//     EditschoolComponent
// ]