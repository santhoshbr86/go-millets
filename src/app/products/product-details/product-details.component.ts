import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
@Input() product;
subject = new Subject<any>();
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {}
}
