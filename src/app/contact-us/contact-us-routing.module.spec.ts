import { ContactUsRoutingModule } from './contact-us-routing.module';

describe('ContactUsRoutingModule', () => {
  let contactUsRoutingModule: ContactUsRoutingModule;

  beforeEach(() => {
    contactUsRoutingModule = new ContactUsRoutingModule();
  });

  it('should create an instance', () => {
    expect(contactUsRoutingModule).toBeTruthy();
  });
});
