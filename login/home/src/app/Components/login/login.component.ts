import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public showMyMessage = false;
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() {}

  ngOnInit(): void {}
  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true;
    }, 20);
  }
}
