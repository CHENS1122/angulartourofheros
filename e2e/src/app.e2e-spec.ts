import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to angular-tour-of-heroes!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  let _heroNames = ['Dr IQ', 'Magneta', 'Bombasto'];
let _masterName = 'Master';
 
it('should pass properties to children properly', function () {
  let parent = element.all(by.tagName('app-hero-parent')).get(0);
  let heroes = parent.all(by.tagName('app-hero-child'));
 
  for (let i = 0; i < _heroNames.length; i++) {
    let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
    let childDetail = heroes.get(i).element(by.tagName('p')).getText();
    expect(childTitle).toEqual(_heroNames[i] + ' says:');
    expect(childDetail).toContain(_masterName);
  }
});
});

