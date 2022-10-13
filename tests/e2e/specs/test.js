// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // it("Test the length of the list", () => {
  //   cy.get("[data-cy=list-length]").children().should("have.length", 2);
  // });

  it("Should delete a post", () => {
    cy.get("[data-cy=list-length]").children().first().find("[data-cy=list-button]").click();
    cy.get("[data-cy=list-length]").children().should("have.length", 1);
    cy.get("[data-cy=list-length]").children().first().find("[data-cy=list-button]").click();
  });
});
