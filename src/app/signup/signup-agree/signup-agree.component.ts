import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-signup-agree',
  templateUrl: './signup-agree.component.html',
  styleUrls: ['./signup-agree.component.scss']
})
export class SignupAgreeComponent implements OnInit {

  constructor(
    private router: Router,
    ) {
    }

  ngOnInit() {}

}
