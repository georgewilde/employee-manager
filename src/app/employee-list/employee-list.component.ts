import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: [ './employee-list.component.css' ],
})
export class EmployeeListComponent implements OnInit {

  @Input() employees: Employee[];

  constructor() {
  }

  ngOnInit() {
  }

}
