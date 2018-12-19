import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private loginservice: LoginService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  signup() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log(this.registerForm.value);
      this.loginservice.signup(this.registerForm.value).subscribe(res => {
        console.log(res);
        this.activeModal.close();
      });
    }
  }
}
