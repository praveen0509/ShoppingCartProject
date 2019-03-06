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

  formSubmission() {
    alert('Valid');
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      fatherName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPwd: [''],
      phno: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required ],
      dropdown: ['', Validators.required]
    }, {validator: this.passwordValidator});
  }

  passwordValidator(group: FormGroup) {
    const pwd = group.controls.password.value;
    const confirmPwd = group.controls.confirmPwd.value;

    return pwd === confirmPwd ? null : {notSame : false } ;
  }

}
