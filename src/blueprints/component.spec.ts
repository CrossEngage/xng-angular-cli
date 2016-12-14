describe('Component: <%= componentName %>', () => {
  let $injector, $componentController;
  let component;

  beforeEach(angular.mock.module('<%= modulePrefix %>.<%= moduleName %>'));

  beforeEach(angular.mock.inject((_$injector_) => {
    $injector = _$injector_;
    $componentController = $injector.get('$componentController');

    component = $componentController('<%= componentPrefix %><%= capitalizedComponentName %>', {}, {});
  }));

  it('should have defaults', () => {
    expect(component.meaningOfLife).toBe(42);
  });
});