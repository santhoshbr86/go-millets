import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss']
})
export class ProductsFiltersComponent implements OnInit {
 @Output() emitChangeFilter = new EventEmitter();
  categories = [
    {id: 1, type: 'Areca', selected: false},
    {id: 2, type: 'Coconut', selected: false}
  ];
  tempproductstype = [
    {id: 1, type: 'Areka Plates', cat: 'areca' },
    {id: 2, type: 'Areka Bowls',  cat: 'areca'},
    {id: 3, type: 'Areka Mugs',  cat: 'areca'},
    {id: 4, type: 'Coconut Mats', cat: 'coconut'},
    {id: 5, type: 'Coconut carpets', cat: 'coconut'},
    {id: 6, type: 'Coconut rope', cat: 'coconut'}
  ];
  productstype = this.tempproductstype;

  productFilter: FormGroup;
  productTypeFilter: FormGroup;
  constructor(private fb: FormBuilder) {
    this.productFilter = this.fb.group({
      categories: this.buildCatogoroes()
    });
    this.productTypeFilter = this.fb.group({
      types: []
    });
  }
  get filterForm() {
    return this.productFilter.get('categories');
  }
  buildCatogoroes() {
    const arr = this.categories.map(cat => {
      return this.fb.control(cat.selected);
    });
    return this.fb.array(arr);
  }

  selectedProducts(event, cat) {
    if (event.target.checked) {
       this.categories.filter(c => c.id === cat.id).map(c => c.selected = event.target.checked);
   } else  {
      this.categories.filter(c => c.id === cat.id).map(c => c.selected = event.target.checked);
   }
    const temp = this.categories.filter(c => c.selected === true)
    .map((c) => this.tempproductstype.filter(p => p.cat === c.type.toLocaleLowerCase()));
   if (temp.length > 0) {
    this.productstype = temp.reduce((a, b) => a.concat(b), []);
   } else {
    this.productstype = this.tempproductstype;
   }
   this.emitChangeFilter.emit(this.categories.filter(c => c.selected === true));
}
  ngOnInit() {
  }

}
