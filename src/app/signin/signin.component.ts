import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AppService } from '../services/app.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      userName: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  UserSubmitted() {
    this.appService.authenticateUser(this.signinForm.get('userName').value, this.signinForm.get('password').value)
      .then((data) => {
        if (data)
          this.router.navigate(['label-maker']);
      })

  }

}
