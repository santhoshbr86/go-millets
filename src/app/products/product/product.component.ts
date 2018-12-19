import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ShopingcartService } from '../../services/shopingcart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  constructor(private productService: ProductsService, private modalService: NgbModal, private shopeCart: ShopingcartService) { }
  ngOnInit() {
  }
  openModal(pro) {
    // this.productdetail.getProduct(id);
    const modalRef = this.modalService.open(ProductDetailsComponent, {windowClass: 'modal-holder', size: 'lg'});
    modalRef.componentInstance.product = pro;
  }
  addtoCart(product) {
    this.shopeCart.addToCart(product);
  }
}
