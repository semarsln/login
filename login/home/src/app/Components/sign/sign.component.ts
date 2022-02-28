import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterEvent, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  hide = true;
  signform = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
  buttonClick() {}
}
