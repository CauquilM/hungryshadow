// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the app root url", () => {
    cy.get("[data-cy=title]").should("have.text", "Test");
  });

  it("Shouldn't be void", () => {
    cy.get("[data-cy=parent]").children().should("have.text", "Coucou");
  });
});
