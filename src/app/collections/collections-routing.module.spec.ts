import { CollectionsRoutingModule } from './collections-routing.module';

describe('CollectionsRoutingModule', () => {
  let collectionsRoutingModule: CollectionsRoutingModule;

  beforeEach(() => {
    collectionsRoutingModule = new CollectionsRoutingModule();
  });

  it('should create an instance', () => {
    expect(collectionsRoutingModule).toBeTruthy();
  });
});
