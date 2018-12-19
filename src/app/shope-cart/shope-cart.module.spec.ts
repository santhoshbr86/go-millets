import { ShopeCartModule } from './shope-cart.module';

describe('ShopeCartModule', () => {
  let shopeCartModule: ShopeCartModule;

  beforeEach(() => {
    shopeCartModule = new ShopeCartModule();
  });

  it('should create an instance', () => {
    expect(shopeCartModule).toBeTruthy();
  });
});
