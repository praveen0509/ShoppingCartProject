import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorage} from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styles: []
})
export class RegistrationPageComponent implements OnInit {
   angForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorage) {
    this.createForm();
  }

  ngOnInit() {
  }

  formSubmission(){
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(4)],
      fatherName: ['', Validators.required, Validators.minLength(4)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(4)],
      phno: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required ],
      dropdown: ['', Validators.required]
    });
  }

}
