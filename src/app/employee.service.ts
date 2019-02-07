import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseUrl = 'http://5c55c91409580600147c4d9d.mockapi.io/api/users';

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
