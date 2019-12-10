import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  options: string[] = ['1 Downing Street, Westminster, London, SW1 2AA', '2 Downing Street, Westminster, London, SW1 2AA', '3 Downing Street, Westminster, London, SW1 2AA'];
  filteredOptions: Observable<string[]>;

  mainForm: FormGroup;
  myControl = new FormControl();
  constructor(
    private router: Router,
    private formbuilder: FormBuilder
    ) {
      this.initilaizeForm();
    }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  initilaizeForm() {
    this.mainForm = this.formbuilder.group({
      accountHolder: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      sortCode: ['', [Validators.required]],
    })
  }

  get formController() {
    return this.mainForm.controls
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPass').value;

    return pass === confirmPass ? null : { notSame: true }     
  }

  directDebit() {
    // localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/dashboard']);
    this.router.navigate(['/payment/card']);
  }

}
