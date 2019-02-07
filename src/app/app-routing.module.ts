import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesPageComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeePageComponent,
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
