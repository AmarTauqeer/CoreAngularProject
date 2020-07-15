import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  onSubmit = () => {
    this.http
      .post('https://localhost:5001/api/Employees', this.employeeForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  };
}
