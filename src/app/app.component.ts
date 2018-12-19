import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ArEco';
  dir;
  constructor(private modalService: NgbModal,  private logService: LoginService, private el: ElementRef) {}
  ngOnInit() {
    this.logService.autoAuth();
  }
  openModal() {
    // this.productdetail.getProduct(id);
    const modalRef = this.modalService.open(LoginComponent, {size: 'lg'});
    // modalRef.componentInstance.id = id;
  }
  openRegisterModal() {
    const modalRef = this.modalService.open(RegistrationComponent, {size: 'lg'});
  }
}
