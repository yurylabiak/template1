import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-pwd-choose',
  templateUrl: './pwd-choose.component.html',
  styleUrls: ['./pwd-choose.component.scss']
})
export class PwdChooseComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder
    ) {
      this.initilaizeForm();
    }

  ngOnInit() {}

  initilaizeForm() {
    this.loginForm = this.formbuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  get formController() {
    return this.loginForm.controls
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPass').value;

    return pass === confirmPass ? null : { notSame: true }     
  }

  pwdChoose() {
    // localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }

}
