import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe("the accordion component", () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('src/accordion')
      .inView('<accordion panels.two-way="panels"></accordion>')
      .boundTo({ panels: [{title: "Panel 1", viewUrl: "src/helperContent/viewOne.html"}, 
                          {title: "Panel 2", viewUrl: "src/helperContent/viewTwo.html"}] });
  });

  it("should initialize", done => {
      component.create(bootstrap).then(() => {
          const firstPanelHeader = document.querySelector("#panel-header-0");
          expect(firstPanelHeader.innerHTML).toBe("Panel 1");
          done();
      });
  });

  it("will have both panels inactive", done => {
      component.create(bootstrap).then(() => {
          const firstPanelBody = document.querySelector("#panel-body-0");
          const secondPanelBody = document.querySelector("#panel-body-1");

          expect(firstPanelBody.classList).toContain("aurelia-accordion-panel-body-inactive");
          expect(secondPanelBody.classList).toContain("aurelia-accordion-panel-body-inactive");
          done();
      });
  })

  afterEach(() => {
    component.dispose();
  });
});