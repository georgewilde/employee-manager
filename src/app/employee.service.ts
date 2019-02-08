import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseUrl = 'https://my-json-server.typicode.com/georgewilde/employee-manager/employees';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    const url = `${this.baseUrl}/${employeeId}`;

    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee) {
    console.log(employee);
  }

}
