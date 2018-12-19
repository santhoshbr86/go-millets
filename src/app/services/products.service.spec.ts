import { TestBed, inject } from '@angular/core/testing';
 import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

fdescribe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ProductsService]
  }));
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
  it('Should call http get products', inject([HttpTestingController, ProductsService],
    (httpMock: HttpTestingController, ps: ProductsService ) => {
        const mock = [
          { id: 1, title: 'abc', content: 'data data', cat: 'areca', type: 'areca' },
          { id: 2, title: 'xyz', content: 'data data', cat: 'areca', type: 'areca' }
        ];
        ps.getProducts().subscribe( val => {
          expect(val.products.length).toBe(2);
        });
          const mockReq = httpMock.expectOne('/assets/resources/products.json');
          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toBe('json');
          mockReq.flush(mock);
          httpMock.verify();
  }));
});
