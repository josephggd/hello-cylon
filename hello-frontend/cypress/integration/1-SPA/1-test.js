/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.intercept({
      method: "POST",
      url: "/data/save/list",
    }).as("postNewList");
    cy.intercept({
      method: "GET",
      url: "/data/all",
    }).as("getLists");
    cy.intercept({
      method: "DELETE",
      url: "/data/remove/list/**",
    }).as("removeList");
    cy.visit("/");
  })

  it('-1-inputs are hidden by default', () => {
    cy.get("[data-testid=\"view-lists-header\"]").should('be.visible');
    cy.get("[data-testid=\"edit-list-header\"]").should('be.visible');
    cy.get("[data-testid=\"no-lists\"]").should('be.visible');
    cy.contains("[data-testid=\"title-input\"]").should("not.exist");
    cy.contains("[data-testid=\"description-input\"]").should("not.exist");
  })
  it('-2-can add new todo items', () => {
    cy.contains("[data-testid=\"title-field\"]").should('not.exist');
    cy.contains("[data-testid=\"description-field\"]").should('not.exist');
    cy.get("[data-testid=\"new-list-button\"]").click();
    cy.get("[data-testid=\"title-input\"]").type("t");
    cy.contains(/Edit t/).should('be.visible');
    cy.get("[data-testid=\"title-input\"]").type("itle");
    cy.get("[data-testid=\"description-input\"]").type("description");
    cy.get("[data-testid=\"save-button\"]").click({force: true});
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait("@postNewList")
        .its("response.statusCode")
        .should("eq", 200);
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait("@getLists")
        .its("response.statusCode")
        .should("eq", 200);
    // select the new list
    cy.get("[data-testid=\"view-list-0\"]").click();
    // add an item
    cy.get("[data-testid=\"add-button\"]").click();
    cy.get("[data-testid=\"input-title-0\"]")
        .click()
        .type("title 2");
    cy.get("[data-testid=\"input-description-0\"]")
        .click()
        .type("description 2");
  });
  it('-3-can view or delete existing', () => {
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait("@getLists")
      .its("response.statusCode")
      .should("eq", 200);
    cy.get("[data-testid=\"view-list-0\"]").should('be.visible');
    cy.contains("title : description").should('be.visible');
    cy.get("[data-testid=\"delete-list-0\"]").click();
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait("@removeList")
      .its("response.statusCode")
      .should("eq", 200);
    // eslint-disable-next-line testing-library/await-async-utils,cypress/no-unnecessary-waiting
    cy.wait(2000);
    // eslint-disable-next-line testing-library/await-async-utils,cypress/no-unnecessary-waiting
    cy.contains("title : description").should('not.exist');
  });
})
