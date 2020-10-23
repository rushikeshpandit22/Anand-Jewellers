import { AboutUsRoutingModule } from './about-us-routing.module';

describe('AboutUsRoutingModule', () => {
  let aboutUsRoutingModule: AboutUsRoutingModule;

  beforeEach(() => {
    aboutUsRoutingModule = new AboutUsRoutingModule();
  });

  it('should create an instance', () => {
    expect(aboutUsRoutingModule).toBeTruthy();
  });
});
