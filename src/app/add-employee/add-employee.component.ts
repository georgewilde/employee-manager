import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: [ './add-employee.component.css' ],
})
export class AddEmployeeComponent implements OnInit {

  employee = {} as Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee);
  }
}
