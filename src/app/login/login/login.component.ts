import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
// import { ProductState, ProductsSelector } from '../store/products';
import * as fromstore from '../../store';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  private log$: Observable<any>;
  private log_: Subscription;
  constructor(private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private pStore: Store<fromstore.StoreState>,
    private route: Router,
    private logService: LoginService
    ) {
    this.log$ = this.pStore.select(fromstore.getisloggedIn);
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.log$.subscribe(data => {
    //   console.log(data);
    //   if (data) {
    //     this.activeModal.close();
    //     this.route.navigate(['/checkout']);
    //   }
    // });
    this.logService.getauthUser().subscribe(isAuth => {
      if (isAuth) {
        this.activeModal.close();
       }
     });
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submitted = false;
      this.logService.dologin(this.loginForm.value);
    //     this.pStore.dispatch({type: fromstore.DO_LOGIN, payload: this.loginForm.value});
    }
  }

}
